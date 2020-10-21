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

  let SubMenuLink = document.querySelector("#open-sub-menu_main");
  SubMenuLink.addEventListener("click", function (e) {
    let SubMenu = document.querySelector(".sub-menu__main");
    SubMenu.classList.toggle("_active");
  });

  let hoverMenu = document.querySelector("#open-sub-menu_main");
  hoverMenu.addEventListener("click", function (e) {
    let hoverMenu = document.querySelector(".first-block-menu");
    hoverMenu.classList.toggle("_active-hover");
  });

  document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".sub-menu")) {
      let SubMenu = document.querySelector(".sub-menu__main");
      SubMenu.classList.remove("_active");
      let hoverMenu = document.querySelector(".first-block-menu");
      hoverMenu.classList.remove("_active-hover");
    }
  });

  $(".minus").on("click", function () {
    $(($plus_minus_input = $plus_minus_input - 1));
    $("input.quantity-input").val($plus_minus_input);
  });

  $(".plus").on("click", function () {
    $(($plus_minus_input = parseInt($plus_minus_input) + 1));
    $("input.quantity-input").val($plus_minus_input);
  });

  $plus_minus_input = $("input.quantity-input").val();

  $(".minus").on("click", function () {
    $(($plus_minus_input = $plus_minus_input - 1));
    $("input.quantity-input").val($plus_minus_input);
  });

  $(".plus").on("click", function () {
    $(($plus_minus_input = parseInt($plus_minus_input) + 1));
    $("input.quantity-input").val($plus_minus_input);
  });

  $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7").on("click", function (
    e
  ) {
    e.preventDefault();
    var target = $(this).data("target");
    $(".targetdivs").css("display", "none");
    $("#" + target + "-div").css("display", "block");
  });

  $(".balance-provide__1").on("click", function () {
    $(".hover__clock").css("transform", "rotate(-30deg)");
  });

  $(".balance-provide__2").on("click", function () {
    $(".hover__clock").css("transform", "rotate(-10deg)");
  });

  $(".balance-provide__3").on("click", function () {
    $(".hover__clock").css("transform", "rotate(2deg)");
  });

  $(".balance-provide__4").on("click", function () {
    $(".hover__clock").css("transform", "rotate(15deg)");
  });

  $(".balance-provide__5").on("click", function () {
    $(".hover__clock").css("transform", "rotate(25deg)");
  });

  $(".balance-provide__6").on("click", function () {
    $(".hover__clock").css("transform", "rotate(35deg)");
  });

  $(".balance-provide__7").on("click", function () {
    $(".hover__clock").css("transform", "rotate(45deg)");
  });

  // СТРЕЛКА

  $(".balance-provide__1").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(4deg)");
  });

  $(".balance-provide__2").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(22.5deg)");
  });

  $(".balance-provide__3").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(33deg)");
  });

  $(".balance-provide__4").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(44deg)");
  });

  $(".balance-provide__5").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(54deg)");
  });

  $(".balance-provide__6").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(63deg)");
  });

  $(".balance-provide__7").hover(function () {
    $(".balance-provide__arrow").css("transform", "rotate(72deg)");
  });

  // МОБИЛКА

  $(".balance-small__1").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(-45deg)");
    $("#btn1").css("color", "#e55d48");
    $("#btn2, #btn3, #btn4, #btn5, #btn6, #btn7").css("color", "black");
  });

  $(".balance-small__2").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(-20deg)");
    $("#btn2").css("color", "#e55d48");
    $("#btn1, #btn3, #btn4, #btn5, #btn6, #btn7").css("color", "black");
  });

  $(".balance-small__3").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(20deg)");
    $("#btn3").css("color", "#e55d48");
    $("#btn1, #btn2, #btn4, #btn5, #btn6, #btn7").css("color", "black");
  });

  $(".balance-small__4").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(45deg)");
    $("#btn4").css("color", "#e55d48");
    $("#btn1, #btn2, #btn3, #btn5, #btn6, #btn7").css("color", "black");
  });

  $(".balance-small__5").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(130deg)");
    $("#btn5").css("color", "#e55d48");
    $("#btn1, #btn2, #btn3, #btn4, #btn6, #btn7").css("color", "black");
  });

  $(".balance-small__6").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(180deg)");
    $("#btn6").css("color", "#e55d48");
    $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn7").css("color", "black");
  });

  $(".balance-small__7").on("click", function () {
    $(".hover_block_mobile").css("transform", "rotate(230deg)");
    $("#btn7").css("color", "#e55d48");
    $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6").css("color", "black");
  });
});

// validation date 1468



