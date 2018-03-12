
$(document).ready(function () {

    $("#navigation").on("click", "a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();


        //забираем идентификатор бока с атрибута href

        var id = $(this).attr('href'),



            //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;



        //анимируем переход на расстояние - top за 500 мс

        $('body,html').animate({ scrollTop: top }, 500);
    });
});


 //коллапс меню после нажатия на подменю
$('.navbar-collapse').on('click', 'a', function (e) {
    $(e.delegateTarget).collapse('toggle');
});
