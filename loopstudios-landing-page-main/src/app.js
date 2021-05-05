const navbarToggler = document.getElementById("navbar-toggler");
const navbarList = document.getElementById("navbar-list");

navbarToggler.addEventListener("click", () => {
  navbarList.classList.toggle("show");
  if (navbarList.classList.contains("show")) {
    navbarToggler.innerHTML = '<i class="fas fa-times" ></i>';
  } else {
    navbarToggler.innerHTML = '<i class="fas fa-bars" ></i>';
  }
});
