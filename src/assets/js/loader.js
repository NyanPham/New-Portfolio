import gsap from "gsap";
import imagesLoaded from "imagesloaded";

const bar = document.querySelector("[data-loading-bar-inner]");
const counter_num = document.querySelector("[data-loading-counter-number]");
const options = {
    damping: 0.1,
    alwaysShowTracks: true,
    plugins: {
        disableScroll: {
            direction: "x",
        },
    },
};

let c = 0;

function StartLoading() {
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
            imagesLoaded(document.querySelectorAll("img"), () => {
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
                gsap.to("header", {
                    duration: 1,
                    delay: 2,
                    top: "0",
                });
                gsap.to(".socials", {
                    duration: 1,
                    delay: 2.5,
                    bottom: "10rem",
                });
                gsap.to(".scrollDown", {
                    duration: 1,
                    delay: 3,
                    bottom: "5.5rem",
                });
                setTimeout(() => {
                    document.dispatchEvent(
                        new CustomEvent("initSmoothScroll", { detail: options })
                    );
                }, 2000);
            });
        }
    }, 20);
}

export default StartLoading;
