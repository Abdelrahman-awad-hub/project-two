var button = document.querySelector(".col .latestActivity footer");

let element = document.querySelector(".col .latestActivity .hidden");
addEventListener("click", () => {
    document.querySelector(".col .latestActivity .hidden").style.display =
        "block";
    button.style.display = "none";
});

const sliderControllers = document.querySelectorAll(".slider-controllers span");
const sliderItem = document.querySelector(".slider-item");

sliderControllers.forEach((el) => {
    el.addEventListener("click", (e) => {
        sliderItem.setAttribute("src", e.target.getAttribute("data-src"));
        document
            .querySelector(".slider-controllers .active")
            .classList.remove("active");
        e.target.classList.add("active");
    });
});
