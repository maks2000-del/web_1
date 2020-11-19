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

function buy__pizza__0()
{
    store__display.innerHTML = 0;
}
function buy__pizza__1()
{
    let ii = parseInt(store__display.innerHTML);
    ii +=  3.2;
    store__display.innerHTML =+ ii;
}
function buy__pizza__2()
{
    let ii = parseInt(store__display.innerHTML);
    ii +=  4.9;
    store__display.innerHTML = ii;
}