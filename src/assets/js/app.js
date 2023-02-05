import StartLoading from "./loader.js";
import initSwiper from "./swiper.js";
import Scrollbar from "./smoothScroll.js";
import "./faq.js";
import "./scrollDown.js";

StartLoading();
initSwiper();

document.addEventListener("initSmoothScroll", (e) => {
    let pageSmoothScroll = Scrollbar.init(document.body, e.detail);
    pageSmoothScroll.track.xAxis.element.remove();
});
