$(document).ready(function () {
  var teams = $(".team");

  function eventHover() {
    teams.hover(function () {
      $(this).toggleClass("active");
    });
  }
  function eventClick() {
    $(document).on("click", ".btn", function () {
      var contenedorTeam = $(this).parent().attr("id");
      var voto = contenedorTeam.split("-").pop();

      var team = $("#" + contenedorTeam);

      voted(voto, team);
      btnReset(team);
      teams.not(team).hide();
      $(this).hide();
    });
  }
  function voted(voto, team) {
    var emote = "";
    if (voto === "perros") {
      emote = "🐶";
    } else {
      emote = "🐱";
    }
    var respuesta = $(`<div class="voto"> Eres team ${voto}. ${emote}</div>`);
    team.append(respuesta);
  }
  function btnReset(team) {
    var btnReset = $('<button class="btn-reset"></button>');
    team.append(btnReset);

    $(document).on("click", ".btn-reset", function () {
      team.find(".voto").remove(); // Elimina el mensaje de voto
      $(this).remove(); // Elimina el botón reset
      teams.show(); // Muestra todos los equipos
      team.find(".btn").show(); // Muestra el botón de voto
    });
  }

  eventHover();
  eventClick();
});
