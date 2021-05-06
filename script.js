const projects = [
  "article-preview-component-master",
  "huddle-landing-page-with-single-introductory",
  "loopstudios-landing-page-main",
  "fylo-landing-page-with-two-column-layout-master",
  "huddle-landing-page-with-curved-sections-master",
];

const list = document.getElementById("list");

projects.forEach((name, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
          <a href="/${name}/index.html">
              <img src="/${name}/design/desktop-preview.jpg" alt="${name}" />
              <p>${i + 1}. ${formatProjectName(name)}</p>
          </a>
      `;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
