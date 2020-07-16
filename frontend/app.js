import _ from 'lodash';
import './js/slider';
import 'bootstrap';
import * as AOS from 'aos/dist/aos.js';
import "./styles/main.scss";
import './js/imagenes';
import './js/scrolling';
import './js/activeClassMenu';
import "./js/appSlider";
import "./js/pinterestGrid";
// import { Lightbox } from "../js/sliderGaleria";
import './js/sliderGaleria';
import "./js/appReceta";
import "./js/seleccionarProductoPedido";
import "./js/appPedido";
import "./js/appContacto";


AOS.init({
  duration: 1000
});

AOS.init();

// document.addEventListener('scroll',()=>{
//   const scroll = window.pageYOffset;
//   console.log(scroll);
// });

const contenedor = document.querySelector('#contenedorNosotros');
if (window.matchMedia('(min-width:1441px)').matches){
  contenedor.setAttribute('class','container-fluid');
}


// document.addEventListener('click',(e)=>{
//   let click = e.target;
//   const select = document.querySelector('#select');
//   const producto = document.querySelector('#opciones');
//   const opcionProducto = document.querySelectorAll('#opciones > .opcion');
//       if (click != opcionProducto && click != select){
//           producto.classList.remove('active');
//           select.classList.remove('active');
//       }
// });
