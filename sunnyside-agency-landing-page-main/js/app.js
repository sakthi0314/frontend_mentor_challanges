// DOM
const menu = document.getElementById("menu");
const mobileList = document.getElementById("mobileList");

menu.addEventListener("click", () => {
  if (menu.classList.contains("menuOpen")) {
    menu.classList.remove("menuOpen");
  } else {
    menu.classList.add("menuOpen");
  }

  if (mobileList.classList.contains("listOpen")) {
    mobileList.classList.remove("listOpen");
  } else {
    mobileList.classList.add("listOpen");
  }
});
