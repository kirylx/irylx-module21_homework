// FAQ.HTML:

const collbuttons = document.querySelectorAll(".faq__collbutton");

const toggleCollapsible = function toggleCollapsibleElementsWhenCLicking(
    event
) {
    const answer = event.target.nextElementSibling;
    event.target.classList.toggle("faq__collbutton_open");
    event.target.querySelector("img").classList.toggle("rotate180");
    answer.classList.toggle("faq__answer_visible");
};

collbuttons.forEach((collbutton) => {
    collbutton.addEventListener("click", toggleCollapsible);
});
