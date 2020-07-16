const home = document.querySelector('#home');
const producto = document.querySelector('#producto');
const nosotros = document.querySelector('#nosotros');
const galeria = document.querySelector('#galeria');
const recetas = document.querySelector('#recetas');
const pedido = document.querySelector('#pedido');
const footer = document.querySelector('#footer');
let scrolear = 0;
const enlaces = document.querySelectorAll('ul li a');
$("ul li a").on("click", function(){
    $("li a").removeClass("active");
    $(this).addClass("active");
    $('.navbar-collapse').collapse('hide');//para oculatar el menu de hamburguesa una vez se de click
 });

document.addEventListener('scroll',()=>{
    scrolear = window.pageYOffset;
    if (scrolear > home.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[0].setAttribute('class','active link nav-link');
    }
    if (scrolear > producto.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[1].setAttribute('class','active link nav-link');
    }
    if (scrolear > nosotros.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[2].setAttribute('class','active link nav-link');
    }
    if (scrolear > galeria.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[3].setAttribute('class','active link nav-link');
    }
    if (scrolear > recetas.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[4].setAttribute('class','active link nav-link');
    }
    if (scrolear > pedido.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[5].setAttribute('class','active link nav-link');
    }
    if (scrolear > footer.offsetTop-121){
        $("li a").removeClass("active");
        enlaces[6].setAttribute('class','active link nav-link');
    }
});


    