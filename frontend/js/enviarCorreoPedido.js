import { EnvioCorreosPedidos } from "../services/enviarCorreosPedidos";
import { RespuestaPedidos } from "../services/respuestaAutomaticaPedidos";
import { Interfaz } from "./interfaceAgregarProducto";

export const enviarCorreo = (productos) => {
  const empresa = document.querySelector("#nombre-empresa").value;
  const nombrePedido = document.querySelector("#nombre").value;
  const correoPedido = document.querySelector("#correo").value;
  const direccionPedido = document.querySelector("#direccion").value;
  const telefonoPedido = document.querySelector("#telefono").value;
  const pedido = productos;

  // console.log('empresa',empresa);
  // console.log('nombre',nombre);
  // console.log('correo',correo);
  // console.log('direccion',direccion);
  // console.log('telefono',telefono);
  // console.log('pedido',pedido);

  const datos = {
    empresa,
    nombrePedido,
    correoPedido,
    direccionPedido,
    telefonoPedido,
    pedido,
  };
  console.log("informacion para el pedido", datos);

  const envioCorreosPedidos = new EnvioCorreosPedidos();
  envioCorreosPedidos
    .postEmail(datos)
    .then(() => {
      const respuesta = new RespuestaPedidos();
      respuesta
        .postEmail(datos)
        .then(() => {
          const limpiar = new Interfaz();
          limpiar.limpiarFormularioEnvio();
          console.log("respuesta enviada Satisfactoriamente");
          document.querySelector("#label-pedidos").innerHTML =
            '<span class="mensaje" style="color:green">Su petición ha sido enviada con éxito</span>';

          setTimeout(() => {
            let isVisible = $("#informacion").is(":visible");
            const formulario = document.querySelector("#form-pedido");
            const columnasFormulario = document.querySelector(
              "#columnas-formulario"
            );
            const vacia = document.querySelector("#vacia");
            const datosFinales = document.querySelector("#datos-finales");
            const listarProductos = document.querySelector("#listar-productos");
            isVisible = false;
            function removeAllChilds(a) {
              const elemento = document.getElementById(a);
              while (elemento.hasChildNodes())
                elemento.removeChild(elemento.firstChild);
            }
            removeAllChilds("datos-finales");
            removeAllChilds("listar-productos");
            formulario.style.width = "40%";
            columnasFormulario.setAttribute(
              "class",
              "col-12 columnas-formulario"
            );
            vacia.setAttribute("class", "vacia d-none");
            listarProductos.setAttribute("class", "listar-productos d-none");
            datosFinales.setAttribute("class", "datos-finales d-none");
            if (window.matchMedia("(max-width:1024px)").matches) {
              formulario.style.width = "50%";
            }
            if (window.matchMedia("(max-width:768px)").matches) {
              formulario.style.width = "100%";
            }
          }, 3000);
        })
        .catch((error) => {
          document.querySelector("#label-pedidos").innerHTML =
            '<span class="mensaje" style="color:red">*Su pedido no pudo ser enviado por alguna circunstancia por favor intentelo nuevamente</span>';
          console.log(error);
        });
    })
    .catch((error) => {
      document.querySelector("#label-pedidos").innerHTML =
        '<span class="mensaje" style="color:red">*Su pedido no pudo ser enviado por alguna circunstancia por favor intentelo nuevamente</span>';
      console.log(error);
    });
};
