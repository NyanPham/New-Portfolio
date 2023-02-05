import StartLoading from "./loader.js";
import initSwiper from "./swiper.js";
import Scrollbar from "./smoothScroll.js";
import "./faq.js";
import "./scrollDown.js";

StartLoading();
initSwiper();
RunAnimationWhenInView();

document.addEventListener("initSmoothScroll", (e) => {
    let pageSmoothScroll = Scrollbar.init(document.body, e.detail);
    pageSmoothScroll.track.xAxis.element.remove();
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
