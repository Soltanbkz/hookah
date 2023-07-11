$(document).ready(function ($) {
  $(".wrapper__video .play").click(function () {
    if ($("#myVideo")[0].paused) {
      $("#myVideo")[0].play();
      $(".wrapper__video").addClass("active");
    } else {
      $("#myVideo")[0].pause();
      $(".wrapper__video").removeClass("active");
    }
  });
});

$(".wrapper__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: true,
  prevArrow: ".wrapper__arrows.left",
  nextArrow: ".wrapper__arrows.right",
  responsive: [
    {
      breakpoint: 789,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 513,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$("a[href^='#click-']").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000
  );
});