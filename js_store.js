
function buy__pizza__0()
{
    store__display.innerHTML = 0;
    store__displayy.innerHTML = 0;
}

var image1 = new Image(); 
image1.src = "photos/field.png";
image1.className = "store__field__button";
document.body.appendChild(image1);
var image2 = new Image(); 
image2.src = "photos/clear.png";
image2.className = "store__clear__button";
document.body.appendChild(image2);
var image3 = new Image(); 
image3.src = "photos/buy.png";
image3.className = "store__buy__button";
document.body.appendChild(image3);
    
$(image2).on("click", function() { 
  store__display.innerHTML = 0;
  store__displayy.innerHTML = 0;
  $('.modal__store__block').detach();
});

$(image3).on("click", function() { 
  modal.style.display = "block";
});

$(image3).click(function (event) {
  $('body').toggleClass('lock');
  $('.store__block, .store__buy__button, .store__clear__button, .store__field__button').toggleClass('lock');
})


let store = [
    {id: 0, name: "null__store", price: 0, photo:""},

    {id: 1, name: "margarita", price: 3.2, photo:"photos/firs page content/pizza1.jpg"},
    {id: 2, name: "pepperoni", price: 4.9, photo:"photos/firs page content/pizza2.jpg"},
    {id: 3, name: "four seasons", price: 4.7, photo:"photos/firs page content/pizza3.jpg"},
    {id: 4, name: "ham and mushrooms", price: 3.9, photo:"photos/firs page content/pizza4.jpg"},
    {id: 5, name: "pesto", price: 4.9, photo:"photos/firs page content/pizza5.jpg"},
    {id: 6, name: "vegetables and mushrooms", price: 3.6, photo:"photos/firs page content/pizza6.jpg"},
    {id: 7, name: "ham and cheese", price: 2.9, photo:"photos/firs page content/pizza7.jpg"},
    {id: 8, name: "homemade", price: 4.4, photo:"photos/firs page content/pizza8.jpg"},
    {id: 9, name: "bbq chicken", price: 3.6, photo:"photos/firs page content/pizza9.jpg"},
    {id: 10, name: "italia", price: 3.4, photo:"photos/firs page content/pizza10.jpg"},
    {id: 11, name: "double pepperoni", price: 5.9, photo:"photos/firs page content/pizza11.jpg"},

    {id: 12, name: "potato pancakes", price: 2.9, photo:"photos/firs page content/snack1.jpg"},
    {id: 13, name: "pepperoni rolls", price: 3.2, photo:"photos/firs page content/snack2.jpg"},
    {id: 14, name: "chesee rolls", price: 2.8, photo:"photos/firs page content/snack3.jpg"},
    {id: 15, name: "pancakes with ham and cheese", price: 2.9, photo:"photos/firs page content/snack4.jpg"},

    {id: 16, name: "coffee flat white", price: 1.5, photo:"photos/firs page content/drink1.jpg"},
    {id: 17, name: "caramel cappuccino", price: 1.8, photo:"photos/firs page content/drink2.jpg"},
    {id: 18, name: "vanilla cappuccino", price: 1.8, photo:"photos/firs page content/drink3.jpg"},
    {id: 19, name: "nut latte", price: 1.8, photo:"photos/firs page content/drink4.jpg"},
    {id: 20, name: "morse cranberr", price: 2, photo:"photos/firs page content/drink5.jpg"},
    {id: 21, name: "morse black currant", price: 2, photo:"photos/firs page content/drink6.jpg"},
    {id: 22, name: "morse cherry", price: 2, photo:"photos/firs page content/drink7.jpg"},
    {id: 23, name: "morse sea buckthorn", price: 2, photo:"photos/firs page content/drink8.jpg"},
  ];
  
$(function () {
    
    $(".button").click(function () {
    //id кнопки вызвавшей функцию
    var id_pizza = $(this).attr('id');
    //id в массиве
    let pizza = store.find(item => item.name == id_pizza);
    //текущий счётчик корзины
    let qurret__store = parseFloat(store__display.innerHTML);
    //изменение цены
    qurret__store +=  pizza.price;
    store__display.innerHTML =+ qurret__store.toFixed(1);
    store__displayy.innerHTML =+ qurret__store.toFixed(1);

            $('.modal-body').append($('<div>', {
                class: 'modal__store__block',
                id: pizza.id
               }));
               $('#'+pizza.id).append($('<div>', {
                class: 'modal__store__photo',
                id: pizza.id + 'p'
               }));
                   $('#'+pizza.id+'p').append($('<img>', {
                    src: pizza.photo,
                    css: { width:'80px', margin: '3px 10px'} 
                   }));
                       $('#'+pizza.id).append($('<div>', {
                        class: 'modal__store__text',
                        text:' ' + pizza.name 
                       }));
                       $('#'+pizza.id).append($('<div>', {
                        class: 'modal__store__price',
                        text:'$ ' + pizza.price 
                       }));
                       
                       
                       var popup = $('.popup');
                           popup.fadeIn(0);
                           popup.delay(1000).fadeOut(500);
                      
      });
    
      $('.button__del').click(function () {
        $('.modal__store__block').detach();
      });

    })
