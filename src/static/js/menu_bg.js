//---------------------------------//
const main_header = document.getElementById("main_header");
const main_menu_item_link = document.querySelectorAll(".main_menu__item-link");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 100) {
    main_header.style.background = "rgba(12, 127, 204, 0.6)";
  } else {
    main_header.style.background = "rgba(255, 255, 255, 0.25)";
  }
}
