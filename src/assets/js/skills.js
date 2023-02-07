const slideSkills = document.querySelectorAll('[data-slide]');
let lastTime = 0;
const slideLeftWidth = document.querySelector("[data-slide='left']").getBoundingClientRect().width;
const slideRightWidth = document.querySelector("[data-slide='right']").getBoundingClientRect().width;

function skillsSlide(time) {
    const delta = time - lastTime;
    lastTime = time;

    slideSkills.forEach(slide => {
        if (slide.dataset.slide === 'left') {
            slideToLeft(slide, delta);
        } else {
            slideToRight(slide, delta);
        }
    })

    window.requestAnimationFrame(skillsSlide);
}

// window.requestAnimationFrame(skillsSlide);

function slideToLeft(slide, deltaTime) {
    increasePropertyValue(slide, '--left', deltaTime / 100);
    slide.style.transform = `translateX(${getPropertyValue(slide, '--left')})`;
}

function slideToRight(slide, deltaTime) {
    increasePropertyValue(slide, '--right', deltaTime / 100);
    slide.style.transform = `translateX(${getPropertyValue(slide, '--right')})`;
}   

function getPropertyValue(elem, prop) {
    return parseInt(getComputedStyle(elem).getPropertyValue(prop));
}

function setPropertyValue(elem, prop, value) {
    elem.style.setProperty(prop, value);
}

function increasePropertyValue(elem, prop, amount) {
    setPropertyValue(elem, prop, getPropertyValue(elem, prop) + amount);
}   