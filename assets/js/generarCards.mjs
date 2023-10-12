export function crearProyectoCard(proyecto) {
  var colDiv = document.createElement("div");
  colDiv.className = "col mb-3";

  var cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";

  var imagen = document.createElement("img");
  imagen.src = proyecto.imagen;
  imagen.className = "card-img-top";
  imagen.alt = "miniatura_expands-cards";
  imagen.loading = "lazy";

  var cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  var titulo = document.createElement("h5");
  titulo.className = "card-title text-center";
  titulo.textContent = proyecto.titulo;

  var topicsDiv = document.createElement("div");
  topicsDiv.className = "topics mb-3 text-center";

  proyecto.etiquetas.forEach(function (etiqueta) {
    var span = document.createElement("span");
    span.className =
      "rounded-5 bg-dark pt-1 pb-1 ps-2 pe-2 text-center text-light";
    span.textContent = etiqueta;
    topicsDiv.appendChild(span);
  });

  var linksDiv = document.createElement("div");
  linksDiv.className = "links text-center";

  var githubLink = document.createElement("a");
  githubLink.className = "text-decoration-none";
  githubLink.href = proyecto.linkGitHub;
  githubLink.setAttribute("data-bs-toggle", "tooltip");
  githubLink.setAttribute("data-bs-title", "Ver repositorio de GitHub");
  var githubIcon = document.createElement("i");
  githubIcon.className = "fa-brands fa-github fa-lg";
  githubLink.appendChild(githubIcon);
  linksDiv.appendChild(githubLink);

  var vistaPreviaLink = document.createElement("a");
  vistaPreviaLink.className = "text-decoration-none";
  vistaPreviaLink.href = proyecto.linkVistaPrevia;
  vistaPreviaLink.setAttribute("data-bs-toggle", "tooltip");
  vistaPreviaLink.setAttribute("data-bs-title", "Vista previa");
  var vistaPreviaIcon = document.createElement("i");
  vistaPreviaIcon.className = "fa-solid fa-globe fa-lg";
  vistaPreviaLink.appendChild(vistaPreviaIcon);
  linksDiv.appendChild(vistaPreviaLink);

  cardBodyDiv.appendChild(titulo);
  cardBodyDiv.appendChild(topicsDiv);
  cardBodyDiv.appendChild(linksDiv);

  cardDiv.appendChild(imagen);
  cardDiv.appendChild(cardBodyDiv);

  colDiv.appendChild(cardDiv);

  return colDiv;
}
