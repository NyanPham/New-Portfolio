const questions = [...document.querySelectorAll("[data-question]")];
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
        questions
            .filter((q) => q !== question)
            .forEach((q) => q.classList.remove("open"));
    });
});
