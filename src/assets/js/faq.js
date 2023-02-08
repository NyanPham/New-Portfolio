const questions = [...document.querySelectorAll("[data-question]")];

questions.forEach((question) => {
    question.addEventListener("click", () => {
        questions
            .filter((q) => q !== question)
            .forEach((q) => q.classList.remove("open"));
        question.classList.toggle("open");
    }); 
});
