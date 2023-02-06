import StartLoading, { removeHashInURL } from "./loader.js";
import initSwiper from "./swiper.js";
import { initScrollBar } from "./smoothScroll.js";
import "./faq.js";
import "./scrollDown.js";

StartLoading();
initSwiper();
initBackToTopButton();
RunAnimationWhenInView();

let smoothScrollBar;

document.addEventListener("initSmoothScroll", () => {
    smoothScrollBar = initScrollBar();
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

function initBackToTopButton() {
    document.getElementById("scroll-to-top").addEventListener("click", () => {
        smoothScrollBar.scrollTo(0, 0, 1000);
        removeHashInURL();
    });
}
