import Swiper, { Pagination, Navigation } from "swiper";
import { reviews } from "./data.js";

const reviewTemplate = document.querySelector("[data-review-slide-template]");
const swiperContainer = document.querySelector("[data-swiper-wrapper]");

// review swiper
Swiper.use([Pagination, Navigation]);
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        850: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1900: {
            slidesPerView: 5,
        },
    },
});

function initSwiper() {
    reviews.map((review) => {
        const reviewNode = reviewTemplate.content.cloneNode(true);
        reviewNode.querySelector("[data-first-letter]").innerText =
            review.review.substring(0, 1);
        reviewNode.querySelector("[data-review-text]").innerText =
            review.review.substring(1, review.review.length);
        reviewNode.querySelector("[data-review-image]").src = review.image;
        reviewNode.querySelector("[data-review-name]").innerText = review.name;
        reviewNode.querySelector("[data-review-position]").innerText =
            review.position;

        swiperContainer.appendChild(reviewNode);
    });
}

export default initSwiper;
