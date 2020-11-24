var modal = document.getElementById('myModal');
// var btn = document.getElementsById('myBtn');
var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        $('body').toggleClass('lock');
        $('.store__block, .store__buy__button, .store__clear__button, .store__field__button').toggleClass('lock');
        modal.style.display = "none";
    }
}



