document.querySelectorAll(".bingoOption").forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("green");
    }
)});