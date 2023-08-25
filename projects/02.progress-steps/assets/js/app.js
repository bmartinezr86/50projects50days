$(document).ready(function () {
  var container = $("#container");
  function generarEstructura() {
    var containerProgress = $(
      '<div class="progress" id="container-progress"></div>'
    );
    var progress = $('<div class="progress" id="progress"></div>');

    containerProgress.append(progress);
    const cantCiculos = 4;
    for (let i = 0; i < cantCiculos; i++) {
      var circle = $('<div class="circle">' + (i + 1) + "</div>");
      if (i == 0) {
        circle.addClass("active");
      }
      containerProgress.append(circle);
    }

    var btnPrev = $('<button class="btn" id="prev" disabled>Prev</button>');
    var btnNext = $('<button class="btn" id="next">Next</button>');

    container.append(containerProgress);
    container.append(btnPrev);
    container.append(btnNext);
  }
  function funcionalidadBotones() {
    $(document).on("click", ".btn", function () {
      var isBtnNext = $(this).is("#next");
      var isBtnPrev = $(this).is("#prev");
      var circles = $(".circle");
      var activeCircle = circles.filter(".active");
      var progressBar = $("#progress");

      var circulosContainer = $("#container-progress");
      var cantidadCirculos = circulosContainer.find(".circle").length;
      var anchoTotal = circulosContainer.width();
      var distanciaEntreCirculos = anchoTotal / cantidadCirculos + 20;
      console.log(distanciaEntreCirculos);

      widthAnterior = progressBar.width();
      if (isBtnNext) {
        // Encontrar el siguiente círculo y activarlo
        var nextCircle = activeCircle.next(".circle");
        if (nextCircle.length >= 1) {
          nextCircle.addClass("active");
          var nuevoWidth = widthAnterior + distanciaEntreCirculos;
          progressBar.css("width", nuevoWidth + "px");
        }
      } else if (isBtnPrev) {
        // Encontrar el círculo anterior y activarlo
        var prevCircle = activeCircle.prev(".circle");
        if (prevCircle.length > 0) {
          activeCircle.removeClass("active");
          prevCircle.addClass("active");
          var nuevoWidth = widthAnterior - distanciaEntreCirculos;
          progressBar.css("width", nuevoWidth + "px");
        }
      }

      // Actualización de los botones
      if (circles.eq(1).hasClass("active")) {
        $("#prev").removeAttr("disabled");
      } else {
        $("#prev").attr("disabled", "");
      }

      $("#next").prop("disabled", circles.last().hasClass("active"));
    });
  }

  function main() {
    generarEstructura();
    funcionalidadBotones();
  }

  main();
});
