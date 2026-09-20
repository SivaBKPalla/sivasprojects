const list = document.getElementById("projects");

function card(project) {
  const article = document.createElement("article");
  article.className = "project";
  article.innerHTML = `
    <p class="kind"></p>
    <h2></h2>
    <p class="blurb"></p>
    <a class="button" target="_blank" rel="noreferrer"></a>
  `;
  article.querySelector(".kind").textContent = project.kind || "Project";
  article.querySelector("h2").textContent = project.title || "Untitled";
  article.querySelector(".blurb").textContent = project.description || "";
  const link = article.querySelector(".button");
  link.href = project.url || "#";
  link.textContent = project.button || "Open project";
  return article;
}

(window.PROJECTS || []).forEach((project) => {
  list.appendChild(card(project));
});
