const modalFunction = () => {
  document.addEventListener("scroll", () => {
    let isVisible = $("#informacion").is(":visible");
    const scroll = window.pageYOffset;
    if (isVisible === true) {
      if (
        scroll < document.querySelector("#pedido").offsetTop ||
        scroll > document.querySelector("#footer").offsetTop
      ) {
        const tituloModal = document.querySelector("#titulo-principal");
        const parrafoModal = document.querySelector("#parrafo-principal");
        const botonSi = document.querySelector("#btn-si");
        const botonNo = document.querySelector("#btn-no");
        tituloModal.innerHTML =
          'ATENCION <i class="imagen fas fa-exclamation-circle"></i>';
        parrafoModal.innerText =
          "Esta actualmente en la sección de pedidos para enviar una orden a nuestro sistema. ¿Desea continuar con la order?";
        //PARA QUE NO SE CIERRE EL MODAL CON CLICK FUERA
        $("#modelId").modal({
          backdrop: "static",
          keyboard: false,
          show: true,
        });
        //   $('#modelId').modal('handleUpdate');
        botonSi.addEventListener("click", () => {
          $(window).scrollTop($("#pedido").offset().top);
        });
        botonNo.addEventListener("click", () => {
          const formulario = document.querySelector('#form-pedido');
          const columnasFormulario = document.querySelector("#columnas-formulario");
          const vacia = document.querySelector('#vacia');
          const datosFinales = document.querySelector('#datos-finales');
          const listarProductos = document.querySelector('#listar-productos');
          isVisible = false;
          function removeAllChilds(a) {
            const elemento = document.getElementById(a);
            while (elemento.hasChildNodes()) elemento.removeChild(elemento.firstChild);
          }
          removeAllChilds('datos-finales');
          removeAllChilds('listar-productos');
          formulario.style.width = '40%';
          columnasFormulario.setAttribute('class','col-12 columnas-formulario');
          vacia.setAttribute('class','vacia d-none');
          listarProductos.setAttribute('class','listar-productos d-none');
          datosFinales.setAttribute('class','datos-finales d-none');
          if (window.matchMedia("(max-width:1024px)").matches) {
            formulario.style.width = '50%';
          }
          if (window.matchMedia("(max-width:768px)").matches) {
            formulario.style.width = '100%';
          }
        });
      }
    }
  });
};

modalFunction();
