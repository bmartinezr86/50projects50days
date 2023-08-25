$(document).ready(function () {
  var searchContainer = $(".search");

  function addWidgetSearch() {
    var searchIcon = $(
      '<button class="btn"> <i class="fa-solid fa-magnifying-glass"></i></button>'
    );
    var inputSearch = $(
      '<input type="text" class="input-search" placeholder="Search...">'
    );

    searchContainer.append(inputSearch);
    searchContainer.append(searchIcon);

    openSearchWidget();
  }

  function openSearchWidget() {
    $(document).on("click", ".btn", function () {
      if (searchContainer.hasClass("expanding")) {
        searchContainer.removeClass("expanding").addClass("contracting");
      } else {
        searchContainer.removeClass("contracting").addClass("expanding");
      }
    });
  }

  addWidgetSearch();
});
