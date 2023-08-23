$(document).ready(function () {
  $.ajax({
    url: "assets/js/dataImg.json",
    dataType: "json",
    success: function (data) {
      var contenedor = $("#container");
      $.each(data, function (index, item) {
        var id = item.id;
        var img = item.img;
        var desc = item.desc;

        var textDesplegable = $("<h3>" + desc + "</h3>");
        var itemDesplegable = $(
          "<div class='item-desplegable' id='" + id + "'></div>"
        );
        itemDesplegable.css("background-image", "url('" + img + "')");
        itemDesplegable.css("background-size", "cover");

        if (index === 0) {
          itemDesplegable.addClass("desplegado");
          textDesplegable.show();
        } else {
          textDesplegable.hide();
        }

        itemDesplegable.append(textDesplegable);
        contenedor.append(itemDesplegable);

        $(document).on("click", ".item-desplegable", function () {
          var $this = $(this);
          var isOpen = $this.hasClass("desplegado");
          $(".item-desplegable")
            .not($this)
            .removeClass("desplegado")
            .find("h3")
            .hide();

          $this.find("h3").show();

          // Usar slideDown para mostrar el elemento con una transición
          if (!isOpen) {
            $this.toggleClass("desplegado");
          }
        });
      });
    },
  });
});
