import gsap from "gsap";
import Swiper, { Pagination, Navigation } from "swiper";
import { reviews } from "./data.js";

const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");

let c = 0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if (c === 101) {
        clearInterval(barInterval);
        gsap.to(".loading__bar", {
            duration: 5,
            rotate: "90deg",
            left: "1000%",
        });
        gsap.to(".loading__text, .loading__counter", {
            duration: 0.5,
            opacity: 0,
        });
        gsap.to(".loading__box", {
            duration: 1,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to(".loading__svg", {
            duration: 10,
            opacity: 1,
            rotate: "360deg",
        });
        gsap.to(".loading__box", {
            delay: 2,
            border: "none",
        });
        gsap.to(".loading", {
            delay: 2,
            duration: 2,
            zIndex: 1,
            background: "transparent",
            opacity: 0.5,
            pointerEvents: "none",
        });
        gsap.to(".loading__svg", {
            delay: 2,
            duration: 100,
            rotate: "360deg",
        });
    }
}, 20);

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

const swiperContainer = document.querySelector(".swiper-wrapper");
reviews.map((review) => {
    let template = `<div class="swiper-slide"><div class="review"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg><div class="review__card"><div class="review__topborder"></div><div class="review__text"><span>${review.review.substring(
        0,
        1
    )}</span>${review.review.substring(
        1,
        review.review.length
    )}</div><img src="${
        review.image
    }" alt="" class="review__img"><div class="review__profile"><span>${
        review.name
    }</span><span>${review.position}</span></div></div></div></div>`;

    swiperContainer.innerHTML += template;
});

const questions = [...document.querySelectorAll(".question")];
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
        questions
            .filter((q) => q !== question)
            .forEach((q) => q.classList.remove("open"));
    });
});
