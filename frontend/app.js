import _ from "lodash";
import "regenerator-runtime/runtime";
import './js/modalPrincipal';
import './js/slider';
import "bootstrap";
import * as AOS from "aos/dist/aos.js";
import "./styles/main.scss";
import "./js/imagenes";
import "./js/scrolling";
import "./js/activeClassMenu";
import "./js/appSlider";
import "./js/pinterestGrid";
import "./js/sliderGaleria";
import "./js/appReceta";
import "./js/seleccionarProductoPedido";
import "./js/appPedido";
import "./js/appContacto";


AOS.init({
    duration: 1000,
});

AOS.init();


if (window.matchMedia("(max-width:768px)").matches) {
    document.querySelector("#contenedor").setAttribute("class", "container");
}

const contenedor = document.querySelector("#contenedorNosotros");
if (window.matchMedia("(min-width:1441px)").matches) {
    contenedor.setAttribute("class", "container-fluid");
}

window.addEventListener('orientationchange', function() {
    var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    document.body.style.display = 'none';
    setTimeout(function() {
        document.body.style.display = originalBodyStyle;
    }, 10);
});