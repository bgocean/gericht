// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";

/* Календарь */
// https://www.npmjs.com/package/js-datepicker#installation
import datepicker from "js-datepicker";

// click
window.addEventListener("load", function (e) {
  const bg = document.querySelectorAll("[data-bg]");
  if (bg.length) {
    bg.forEach((bgItem) => {
      bgItem.insertAdjacentHTML("beforeend", `<div class="bg-item"></div>`);
    });
  }

  const picker = datepicker("[data-calendar]", {
 formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  }
  });
});
