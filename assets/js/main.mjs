const projectsData = require("./assets/js/projects.json");
import { crearProyectoCard } from "./generarCards.mjs";
const contendorProyectos = document.querySelector("#projects");

var filaActual; // Para llevar un registro de la fila actual
proyectos.forEach(function (proyecto, indice) {
  if (indice % 3 === 0) {
    // Si el índice es un múltiplo de 3, crea una nueva fila
    filaActual = document.createElement("div");
    filaActual.className = "row";
    contendorProyectos.appendChild(filaActual);
  }

  var proyectoCard = crearProyectoCard(proyecto);
  filaActual.appendChild(proyectoCard);
});
