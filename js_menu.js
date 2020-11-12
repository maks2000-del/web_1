$(document).ready(function(){
    $('.header__burger,.header__menu').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
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