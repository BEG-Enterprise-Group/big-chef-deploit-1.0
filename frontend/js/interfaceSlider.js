export class Interface {
  cargarElementos(evento) {
    const eventos = evento.target.id;
    let imagen,
      imagenModal,
      tituloModal,
      boton,
      parrafoModal = null;
    tituloModal = document.querySelector("#titulo-modal");
    imagenModal = document.querySelector("#imagen-modal");
    parrafoModal = document.querySelector("#parrafo-modal");
    const modal = document.querySelector('#contenido2');

    if (window.matchMedia("(min-width:1441px)").matches) {
      modal.setAttribute(
        "class",
        "modal-dialog modal-dialog-centered modal-xl"
      );
    }
    if (window.matchMedia("(max-width:1440px)").matches) {
      modal.setAttribute(
        "class",
        "modal-dialog modal-dialog-centered modal-lg"
      );
    }
    if (window.matchMedia("(max-width:767px)").matches) {
      modal.setAttribute(
        "class",
        "modal-dialog modal-dialog-centered modal-sm"
      );
    }

    switch (eventos) {
      case "btnHeavy":
        boton = document.querySelector("#btnHeavy");
        boton.setAttribute("data-toggle", "modal");
        boton.setAttribute("data-target", "#modelId1");
        imagen = document.querySelector("#heavy .imagen");
        tituloModal.innerHTML = "Mayonesa Heavy Duty <strong>Big Chef</strong>";
        parrafoModal.innerHTML =
          "La mayonesa <strong>Heavy Duty</strong> es nuestro producto estrella con el puedes preparar innumerables tipos de salsa para deleitar a tus clientes; nuestra salsa es la base para chimichurri, salsa tartara, etc";
        imagenModal.setAttribute("src", imagen.getAttribute("src"));
        break;
      case "btnTradicional":
        boton = document.querySelector("#btnTradicional");
        boton.setAttribute("data-toggle", "modal");
        boton.setAttribute("data-target", "#modelId1");
        imagen = document.querySelector("#tradicional .imagen");
        tituloModal.innerHTML =
          "Mayonesa Tradicional <strong>Big Chef</strong>";
        parrafoModal.innerHTML =
          "La mayonesa <strong>tradicional</strong> es la mas suave y saludable salsa que se encuentre en nuestro mercado colombiano, al mismo tiempo contiene una serie de nutrientes que son beneficos para nuestra salud";
        imagenModal.setAttribute("src", imagen.getAttribute("src"));
        break;

      case "btnPina":
        boton = document.querySelector("#btnPina");
        boton.setAttribute("data-toggle", "modal");
        boton.setAttribute("data-target", "#modelId1");
        imagen = document.querySelector("#pina .imagen");
        tituloModal.innerHTML = "Salsa Piña <strong>Big Chef</strong>";
        parrafoModal.innerHTML =
          "La <strong>salsa piña </strong>es ideal para darle ese sabor dulce a nuestras comidas. Esta salsa es es fabrica con piñas seleccionadas y totalmente natural para dar sabor a tus platos y cuidar de tu salud";
        imagenModal.setAttribute("src", imagen.getAttribute("src"));
        break;

      case "btnTomate":
        boton = document.querySelector("#btnTomate");
        boton.setAttribute("data-toggle", "modal");
        boton.setAttribute("data-target", "#modelId1");
        imagen = document.querySelector("#tomate .imagen");
        tituloModal.innerHTML = "Salsa de Tomate <strong>Big Chef</strong>";
        parrafoModal.innerHTML =
          "La <strong>salsa de tomate </strong>de nuestra línea de big chef es fabricada con tomates 100% orgánicos y cultivados en las huertas y fincas del sur de Florida, no usan colorantes artificales";
        imagenModal.setAttribute("src", imagen.getAttribute("src"));
        break;
      default:
        console.log(
          "No existe un elemento con esas caracteristicas en el slider"
        );
        break;
    }
  }
}
