$(document).ready(function () {
  $(".multiple-items")
    .on("init beforeChange", function (e, slick, curr, next) {
      const count = slick.slideCount,
        show = slick.options.slidesToShow,
        center = slick.options.centerMode,
        index = (next | 0) - center * (count > show ? (show / 2) | 0 : 0),
        selector = (shift) => `[data-slick-index="${index + shift * count}"]`;

      $(".slick-xxx", this).removeClass("slick-xxx");
      $([0, 1, -1].map(selector).join(", "), this).addClass("slick-xxx");
    })
    .slick({
      infinite: true,
      centerMode: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 1000,
      centerMode: true,
      centerPadding: "0",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });

  $(".responsive")
    .on("init beforeChange", function (e, slick, curr, next) {
      const count = slick.slideCount,
        show = slick.options.slidesToShow,
        center = slick.options.centerMode,
        index = (next | 0) - center * (count > show ? (show / 2) | 0 : 0),
        selector = (shift) => `[data-slick-index="${index + shift * count}"]`;

      $(".slick-xxx", this).removeClass("slick-xxx");
      $([0, 1, -1].map(selector).join(", "), this).addClass("slick-xxx");
    })
    .slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 1000,
      centerMode: true,
      centerPadding: "0",
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });

  $(".comments__slider_block").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // dots: true,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 2600,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40",
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  $(".microbiome-slider").slick({
    arrows: false,
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1785,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1349,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
