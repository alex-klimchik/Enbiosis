var xStart, xEnd;
slickElement = $(".center");

slickElement
  .on("mousedown touchstart", function (e) {
    if (e.originalEvent.pageX) {
      xStart = e.originalEvent.pageX;
    } else {
      xStart = e.originalEvent.touches[0].pageX;
    }
  })
  .on("mousemove touchmove", function (e) {
    if (e.originalEvent.pageX) {
      xEnd = e.originalEvent.pageX;
    } else {
      xEnd = e.originalEvent.touches[0].pageX;
    }
  })
  .on("mouseup touchend", function (e) {
    var deltaX = xEnd - xStart;

    if (deltaX < 0) {
      slickElement.slick("slickNext");
    } else {
      slickElement.slick("slickPrev");
    }
  });

$(document).ready(function () {
  $plus_minus_input = $("input.quantity-input").val();

  $(".minus").on("click", function () {
    $(($plus_minus_input = $plus_minus_input - 1));
    $("input.quantity-input").val($plus_minus_input);
  });

  $(".plus").on("click", function () {
    $(($plus_minus_input = parseInt($plus_minus_input) + 1));
    $("input.quantity-input").val($plus_minus_input);
  });
});
