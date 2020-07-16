import _ from 'lodash';
import './public/js/slider';
import 'bootstrap';
import * as AOS from 'aos/dist/aos.js';
import "./public/styles/main.scss";
import './public/js/imagenes';
import './public/js/scrolling';
import './public/js/activeClassMenu';
import "./public/js/appSlider";
import "./public/js/pinterestGrid";
// import { Lightbox } from "../js/sliderGaleria";
import './public/js/sliderGaleria';
import "./public/js/appReceta";
import "./public/js/seleccionarProductoPedido";
import "./public/js/appPedido";
import "./public/js/appContacto";


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
