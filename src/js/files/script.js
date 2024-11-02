// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";

// click
window.addEventListener("load", function (e) {
  const bg = document.querySelectorAll("[data-bg]");
  if (bg.length) {
    bg.forEach((bgItem) => {
      bgItem.insertAdjacentHTML("beforeend", `<div class="bg-item"></div>`);
    });
  }
});
