$(document).ready(function() {
  //   $(".multiple-items").slick({
  //     infinite: true,
  //     dots: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //   });
  //   $(".single-item").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     // autoplay: true,
  //     // autoplaySpeed: 4000,
  //   });

  // let nameVal = $("#commentForm #Name").val();
  // $("#commentForm #Name").keyup(function(){
  //   $("p").text(nameVal);
  // })

  //1.получить значение текстовых инпутов
  //2.Проверить количество символов в имени(не меньше 3)
  //3.Почта(проверить правильность написания)
  //4.При нажатии на кнопку - проверить все ли поля заполненны,если не все поля заполнены, то вернуться и подсветить не заполненное, если все заполненны, то открыть модальное окно(див, который был display:hide,стал display: flex), в котором будет написано, что ваше сообщение успешно отправленно(в течении 5 секунд перезагрузить страницу).

 

//Создаём функцию для обработки события "submit" в форме

  $("#commentForm").on("submit", function() {
    //1.получить значение текстовых инпутов
    let $name = $("#name").val();
    let $email = $("#email").val();
    let $website = $("#website").val();
    let $message = $('#comment').val();

    
    
    

  });
});
