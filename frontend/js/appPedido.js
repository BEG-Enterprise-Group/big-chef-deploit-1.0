import { Producto } from "./classProducto";
import { Interfaz } from "./interfaceAgregarProducto";

let telefono, nombre, empresa, direccion, correo, item, cantidad;

/**
 * VALIDACION DE FORMULARIO
 */
document.querySelector('#form-pedido').addEventListener('submit',(e)=>{
    
    try{
        e.preventDefault();
        const select = document.querySelector('#input-select');
        const cantidadPedido = document.querySelector('#cantidad-producto');
        // const formulario = document.querySelector('#form-pedido');
        document.querySelector('#label-pedido').style.display = 'block';
        const producto = new Producto(select.value,cantidadPedido.value);
        const añadirProducto = new Interfaz();
        añadirProducto.cambioItem(select);
        añadirProducto.cambioCantidad(cantidadPedido);
        item = añadirProducto.getItem;
        cantidad = añadirProducto.getCantidad;
        añadirProducto.setItem=item;
        añadirProducto.setCantidad = cantidad;
        añadirProducto.validacionItems(producto);
    }catch(err){
        Interfaz.mostrarMensaje(err,'danger');
        
    }

    
    
});
//ELIMINAR UNA CARD DE LA LISTA
// document.querySelector("#listar-productos").addEventListener("click", (e) => {
  $('#listar-productos').on('click','.boton-lista',(e)=>{
    try {
      //CORREGIR EL TEMA DEL ELIMINAR ESTA SALIENDO EL MENSAJE ANTE CUALQUIER CLICK DENTRO DEL DIV 
      const eliminar = new Interfaz();
      eliminar.eliminarProducto(e.target);
      Interfaz.mostrarMensaje("Elemento eliminado de la lista", "warning");
    } catch (err) {
      Interfaz.mostrarMensaje("Error al eliminar el elemento", "danger");
    }




  });

//VALIDAR FORMULARIO PEDIDO
$("#datos-finales").on("change", "#informacion", () => {
  const entradas = document.querySelectorAll(
    "#informacion input.validarPedido"
  );
  const idEmpresa = document.querySelector("#nombre-empresa");
  const idNombre = document.querySelector("#nombre");
  const idDireccion = document.querySelector("#direccion");
  const validarPedido = new Interfaz();
  for (const elemento of entradas) {
    elemento.addEventListener("focus", validarPedido.enFoco(elemento));
    elemento.addEventListener("blur", validarPedido.fueraFoco(elemento));
    elemento.addEventListener("change", validarPedido.cambiosEntrada(elemento));
  }
  idEmpresa.addEventListener("change", validarPedido.cambioEmpresa(idEmpresa));
  idNombre.addEventListener("change", validarPedido.cambioNombre(idNombre));
  idDireccion.addEventListener("change",validarPedido.cambioDireccion(idDireccion));

  telefono = validarPedido.getTelefono;
  empresa = validarPedido.getEmpresa;
  nombre = validarPedido.getNombre;
  correo = validarPedido.getCorreo;
  direccion = validarPedido.getDireccion;
});

//ENVIAR PEDIDO CON JQUERY PARA ACCEDER AL FORMULARIO CREADO DINAMICAMENTE
$("#datos-finales").on("submit", "#informacion", (e) => {
  try {
    e.preventDefault();
    const enviarPedido = new Interfaz();
    enviarPedido.setEmpresa = empresa;
    enviarPedido.setNombre = nombre;
    enviarPedido.setCorreo = correo;
    enviarPedido.setDireccion = direccion;
    enviarPedido.setTelefono = telefono;
    enviarPedido.validarFormulario();
  } catch (err) {
    Interfaz.mostrarMensaje(err, "danger");
  }
});
