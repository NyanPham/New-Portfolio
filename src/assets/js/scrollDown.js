const scrollDownElem = document.querySelector("[data-scroll-down]");
scrollDownElem.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "#skills";
    a.click();
    a.remove();
});
