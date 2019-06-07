let main_menu_toggle = document.getElementById("main_menu_toggle");
let span_menu_toggle = document.getElementById("span_menu_toggle");

main_menu_toggle.addEventListener("click", () => {
  main_menu.classList.toggle("show_menu");
  span_menu_toggle.classList.toggle("span-menu-toggle-show");
});
