"use strict";

let buttons = document.querySelectorAll(".btn");
let images = document.querySelectorAll(".carousel__image");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let nextCalcul = event.target.id === "suivant" ? 1 : -1;
    let SlideActive = document.querySelector(".carousel__image.active");
    let currentIndex = [...images].indexOf(SlideActive);
    let newIndex = currentIndex + nextCalcul;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    images[newIndex].classList.add("active");
    SlideActive.classList.remove("active");
  });
});
