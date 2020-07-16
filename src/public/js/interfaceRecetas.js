export class Interface{
  cargarElementos(evento){
  
      const eventos = evento.target.id;
      let imagen,imagenModal,tituloModal,boton,parrafoModal = null;
      tituloModal = document.querySelector('#titulo-modal2');
      imagenModal = document.querySelector('#imagen-modal2');
      parrafoModal = document.querySelector('#parrafo-modal2');
      const modal = document.querySelector('#contenido');
      if (window.matchMedia('(min-width:1201px)').matches){
        modal.setAttribute('class','modal-dialog modal-dialog-centered modal-xl');
      }
      if (window.matchMedia('(max-width:1200px)').matches){
        modal.setAttribute('class','modal-dialog modal-dialog-centered modal-lg');
      }
      if (window.matchMedia('(max-width:767px)').matches){
        modal.setAttribute('class','modal-dialog modal-dialog-centered modal-sm');
      }

      switch(eventos){
          case 'receta-uno':
              boton = document.querySelector('#receta-uno');
              boton.setAttribute('data-toggle','modal');
              boton.setAttribute('data-target','#modelId2');
              imagen = document.querySelector('#rUno .imagen');
              const titulo = document.querySelector('#titulo-receta').textContent;
              tituloModal.innerHTML = `${titulo}`;
              parrafoModal.innerHTML = `
              <br>
              <h4 class="h5 titulo-uno" style="font-weigth:600">Ingredientes para la elaboración de la salsa tártara</h4>
              <br>
              <ul style="list-style:circle;" class="cuerpo">
                  <li class="elemento">1 taza de Mayonesa <a style="text-decoration:none;" href="#home"><strong>Heavy Duty Big Chef</strong></a> previamente mezclada con limón</li>
                  <li class="elemento">3 pepinillos agridulces</li>
                  <li class="elemento">1 cucharadita de alcaparras</li>
                  <li class="elemento">1/4 de cebolla fresca</li>
                  <li class="elemento">1 cucharadita de <a <a style="text-decoration:none;" href="#home"><strong>Mostaza Big Chef</strong></a></li>
                  <li class="elemento">perejil fresco</li>
                  <li class="elemento">Una pizca de azúcar (si los pepinillos son en vinagre)</li>
              </ul>
              <br>
              <h5 class="h4 subtitulo-uno">Preparación</h5>
              <ol class="cuerpo">
              <br>
                  <li class="elementoNumerico">La elaboración de la salsa es más que sencilla. Solo tienes que picar lo más finos posibles todos los ingredientes de la salsa: cebolleta, perejil, pepinillos y alcaparras. Lo mezclamos todo muy bien con la mayonesa <a style="text-decoration:none;" href="#home"><strong>Heavy Duty Big Chef</strong></a> y añadimos también la <a <a style="text-decoration:none;" href="#home"><strong>Mostaza Big Chef</strong></a> y el azúcar (solo si los pepinillos son demasiado ácidos y no son agridulces).</li>
                  <li class="elementoNumerico">Sí queda demasiado espesa puedes aligerar con un poco del líquido de los pepinillos.</li>
                  <li class="elementoNumerico">Como ingrediente opcional puedes poner un huevo duro muy picado, o al menos la yema, que le dará buen color y mucha cremosidad.</li>
                  <li class="elementoNumerico">La salsa debe estar bien fría en el momento de servir, así que conserva en la nevera hasta entonces.</li>
              </ol>
          `;
              imagenModal.setAttribute('src',imagen.getAttribute('src'));
              break;
          case 'receta-dos':
              boton = document.querySelector('#receta-dos');
              boton.setAttribute('data-toggle','modal');
              boton.setAttribute('data-target','#modelId2');
              imagen = document.querySelector('#rDos .imagen');
              const titulo2 = document.querySelector('#titulo-receta2').textContent;
              tituloModal.innerHTML = `${titulo2}`;
              parrafoModal.innerHTML = `
              <br>
              <h4 class="h5 titulo-uno" style="font-weigth:600">Ingredientes</h4>
              <br>
              <ul style="list-style:circle;" class="cuerpo p-3">
                  <li class="elemento">1 taza (240gr) de Mayonesa <a style="text-decoration:none;" href="#home"><strong>Heavy Duty Big Chef</strong></a></li>
                  <li class="elemento">1/2 cucharadita de ajo en polvo</li>
                  <li class="elemento">1/2 cucharadita de cebolla en polvo</li>
                  <li class="elemento">1 cucharada de vinagre blanco</li>
                  <li class="elemento">1 cucharadita de <a <a style="text-decoration:none;" href="#home"><strong>Mostaza Big Chef</strong></a></li>
                  <li class="elemento">1/4 de cucharadita de comino en polvo</li>
                  <li class="elemento">1/2 cucharadita de sal o al gusto</li>
                  <li class="elemento">1/2 manojo de cilantro (aprox. 1 taza)</li>
              </ul>
              <br>
              <h5 class="h6 subtitulo-uno">Preparación</h5>
              <ul style="list-style:circle;" class="cuerpo p-3">
              <br>
                  <li class="elemento">Coloca 1 taza de mayonesa, ajo en polvo, cebolla en polvo, vinagre blanco, mostaza, comino en polvo, sal al gusto y cilantro en un procesador de alimentos y licúa hasta obtener una salsa suave y homogénea.</li>
              </ul>
          `;
              imagenModal.setAttribute('src',imagen.getAttribute('src'));
              break;
          default:
              console.log('No existe un elemento con esas caracteristicas en el slider');
              break;
      }

  }
}