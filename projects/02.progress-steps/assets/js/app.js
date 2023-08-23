$(document).ready(function () {
  var container = $("#container");

  var containerProgress = $(
    '<div class="progress" id="container-progress"></div>'
  );
  var progress = $('<div class="progress" id="progress"></div>');

  containerProgress.append(progress);
  const cantCiculos = 4;
  for (let i = 1; i <= cantCiculos; i++) {
    var circle = $(
      '<div class="circle rounded-circle border border-secondary bg-white text-dark d-flex justify-content-center align-items-center badge bg-primary text-wrap fs-6 fw-normal">' +
        i +
        "</div>"
    );
    containerProgress.append(circle);
  }
  var btnPrev = $('<button class="btn" id="prev" disabled>Prev</button>');
  var btnNext = $('<button class="btn" id="next">Next</button>');

  container.append(containerProgress);
  container.append(btnPrev);
  container.append(btnNext);
});
