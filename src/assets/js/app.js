import StartLoading from "./loader.js";
import initSwiper from "./swiper.js";
import Scrollbar, { options } from "./smoothScroll.js";
import "./faq.js";
import "./scrollDown.js";

StartLoading();
initSwiper();
RunAnimationWhenInView();

let smoothScrollBarInit = false;

document.addEventListener("initSmoothScroll", () => {
    initScrollBar();
});

function RunAnimationWhenInView() {
    const animateElemets = document.querySelectorAll(
        "[data-animation-in-view]"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("in-view", entry.isIntersecting);
            });
        },
        {
            threshold: 0.1,
        }
    );

    animateElemets.forEach((elem) => observer.observe(elem));
}

function initScrollBar() {
    if (window.innerWidth < 450 || smoothScrollBarInit) return;

    let pageSmoothScroll = Scrollbar.init(document.body, options);
    pageSmoothScroll.track.xAxis.element.remove();
    smoothScrollBarInit = true;
}
