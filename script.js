// DOM ELEMENT
let list = document.getElementById("list");
let nav = document.getElementById("nav");

// Projects
let projects = [
  "article-preview-component-master",
  "huddle-landing-page-with-single-introductory",
  "loopstudios-landing-page-main",
  "fylo-landing-page-with-two-column-layout-master",
  "huddle-landing-page-with-curved-sections-master",
  "fylo-dark-theme-landing-page-master",
  "huddle-landing-page-with-alternating-feature-blocks-master",
];

projects.forEach((name, i) => {
  const listItem = document.createElement("li");

  listItem.classList.add("grid__item");

  listItem.innerHTML = `
  <div class="grid__item--img">
    <img
      src="${name}/design/desktop-preview.jpg"
      alt=""
    />
  </div>
  <div class="grid__item--info">
    <a  target="_blank" href="https://github.com/sakthi0314/frontend_mentor_challanges/tree/main/${name}" class="github">
      <i class="fab fa-github"></i>
    </a>
    <a href="/${name}/index.html" target="_blank" class="preview">
      <i class="fas fa-external-link-alt"></i>
    </a>
  </div> 
`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Navbar onScroll Animation
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", (e) => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
});
