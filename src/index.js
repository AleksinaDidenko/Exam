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

  // //1.получить значение текстовых инпутов
  // //2.Проверить количество символов в имени(не меньше 3)
  // //3.Почта(проверить правильность написания)
  // //4.При нажатии на кнопку - проверить все ли поля заполненны,если не все поля заполнены, то вернуться и подсветить не заполненное, если все заполненны, то открыть модальное окно(див, который был display:hide,стал display: flex), в котором будет написано, что ваше сообщение успешно отправленно(в течении 5 секунд перезагрузить страницу).

  // //Создаём функцию для обработки события "submit" в форме

  // $("#commentForm").on("submit", function() {
  //   //1.получить значение текстовых инпутов
  //   let $name = $("#name").val();
  //   let $email = $("#email").val();
  //   let $website = $("#website").val();
  //   let $message = $("#comment").val();

  //   //вывод данных в модальное окно
  //   $("#forName").text($name);
  //   $("#forEmail").text($email);
  //   $("#forWebsite").text($website);
  //   $("#forComment").text($message);

  //   //Вызов модального окна
  //   $("div.modal__form")
  //     .removeClass("no_active")
  //     .addClass("active");
  // });
});
