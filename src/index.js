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
  $('#search').on('click', function(){
       $('.header__nav label').toggleClass("active")
   })

   

});
