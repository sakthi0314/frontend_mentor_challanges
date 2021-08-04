const menu = document.getElementById("menu");
const list = document.getElementById("list");
const overlay = document.getElementById("overlay");

// Menu toggle
menu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }

  // Show / hide list
  if (list.classList.contains("openList")) {
    list.classList.remove("openList");
  } else {
    list.classList.add("openList");
  }

  // Show / hide Overlay
  if (overlay.classList.contains("overlayOpen")) {
    overlay.classList.remove("overlayOpen");
  } else {
    overlay.classList.add("overlayOpen");
  }
});
