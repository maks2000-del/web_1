$(document).ready(function(){
    $('.header__burger,.header__menu').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.close').click(function (event) {
        $('body').toggleClass('lock');
        $('.store__block, .store__buy__button, .store__clear__button, .store__field__button').toggleClass('lock');
    })

    
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        
        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 800);
        
    });
});


    