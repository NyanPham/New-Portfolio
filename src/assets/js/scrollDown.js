const scrollDownElem = document.querySelector("[data-scroll-down]");
scrollDownElem.addEventListener("click", () => {
    document
        .getElementById("skills")
        .scrollIntoView({ behavior: "smooth", block: "start" });
});
