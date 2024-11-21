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
      // Форматируем дату в формате "дд/мм/гггг"
      const value = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      input.value = value;
    },
  });
});
