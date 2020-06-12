$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    cssMode: true,
    // spaceBetween: 135, //расстояние между слайдами, чтобі не накладівались друг на друга
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  //search at home.html

  $("#search").on("click", function(event) {
    event.preventDefault();
      $("#search_input").fadeToggle(1000);
  });

  // //hamburger
  $(".header__burger").on("click", function(event) {
    event.preventDefault();
    $(".header__burger").toggleClass("active");
    $(".header__burger span").toggleClass("active");
    $('.header__list li a').toggleClass("active");
    $(".header__menu").slideToggle();
  });
});
