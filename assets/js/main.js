function crearDivRow(contenedor) {
  var rowDiv = document.createElement("div");
  rowDiv.className = "row";
  contenedor.appendChild(rowDiv);
  return rowDiv;
}

function crearElemento(tagName, classNames = []) {
  const element = document.createElement(tagName);
  if (classNames.length > 0) {
    element.classList.add(...classNames);
  }
  return element;
}
function generarCards() {
  fetch("assets/js/projects.json")
    .then((response) => response.json())
    .then((projectData) => {
      var contenedorProjects = document.querySelector("#projects");
      var row = crearDivRow(contenedorProjects); // Crear el primer div row

      projectData.forEach((project, index) => {
        if (index % 3 === 0 && index !== 0) {
          // Cada 3 tarjetas, crear un nuevo div row
          row = crearDivRow(contenedorProjects);
        }
        const col = crearElemento("div", [
          "col",
          "mb-3",
          "d-flex",
          "align-items-stretch",
        ]);

        const card = crearElemento("div", ["card"]);
        card.style.width = "18rem";

        const cardThumnail = crearElemento("img", ["card-img-top"]);
        cardThumnail.src = project.miniatura;
        cardThumnail.alt = project.titulo;
        cardThumnail.setAttribute("loading", "lazy");

        const cardBody = crearElemento("div", ["card-body"]);

        const cardTitle = crearElemento("div", ["card-title", "text-center"]);
        cardTitle.textContent = project.titulo;

        const containerTopics = crearElemento("div", [
          "topics",
          "mb-3",
          "text-center",
        ]);

        for (let j = 0; j < project.etiquetas.length; j++) {
          const topic = crearElemento("span", [
            "rounded-5",
            "bg-dark",
            "pt-1",
            "pb-1",
            "px-2",
            "text-center",
            "text-light",
            "topic",
          ]);
          topic.textContent = project.etiquetas[j];
          containerTopics.appendChild(topic);
        }

        const links = crearElemento("div", ["links", "text-center"]);

        const spanGitHub = crearElemento("span");

        const linkGithub = crearElemento("a", ["text-decoration-none"]);
        linkGithub.href = project.linkGitHub;
        linkGithub.title = "Ver repositorio de GitHub";

        const iconGitHub = crearElemento("i", [
          "fa-brands",
          "fa-github",
          "fa-lg",
        ]);

        linkGithub.appendChild(iconGitHub);
        spanGitHub.appendChild(linkGithub);

        const spanPreview = crearElemento("span");

        const linkPreview = crearElemento("a", ["text-decoration-none"]);
        linkPreview.href = project.linkVistaPrevia;
        linkPreview.title = "Vista previa";

        const iconPreview = crearElemento("i", [
          "fa-solid",
          "fa-globe",
          "fa-lg",
          "mx-2",
        ]);

        linkPreview.appendChild(iconPreview);
        spanPreview.appendChild(linkPreview);

        links.appendChild(spanGitHub);
        links.appendChild(spanPreview);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(containerTopics);
        cardBody.appendChild(links);

        card.appendChild(cardThumnail);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);
      });
      contenedorProjects.appendChild(row);
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
}

generarCards();
