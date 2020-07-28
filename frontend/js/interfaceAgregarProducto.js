let arregloProductos = [];
let contador = 1;
let hijos = 0;

import {enviarCorreo} from './enviarCorreoPedido';
export class Interfaz {
  constructor() {
    this.validarItem = false;
    this.validarCantidad = false;
    this.validarEmpresa = false;
    this.validarNombre = false;
    this.validarCorreo = false;
    this.validarDireccion = false;
    this.validarTelefono = false;
  }

  get getItem() {
    return this.validarItem;
  }

  get getCantidad() {
    return this.validarCantidad;
  }

  get getEmpresa() {
    return this.validarEmpresa;
  }

  get getNombre() {
    return this.validarNombre;
  }

  get getCorreo() {
    return this.validarCorreo;
  }

  get getDireccion() {
    return this.validarDireccion;
  }

  get getTelefono() {
    return this.validarTelefono;
  }

  /**
   * @param {boolean} producto
   */
  set setItem(producto) {
    this.validarItem = producto;
  }

  /**
   * @param {boolean} cantidad
   */
  set setCantidad(cantidad) {
    this.validarCantidad = cantidad;
  }

  /**
   * @param {boolean} empresa
   */
  set setEmpresa(empresa) {
    this.validarEmpresa = empresa;
  }
  /**
   * @param {boolean} telefono
   */

  set setTelefono(telefono) {
    this.validarTelefono = telefono;
  }

  /**
   * @param {boolean} correo
   */
  set setCorreo(correo) {
    this.validarCorreo = correo;
  }

  /**
   * @param {boolean} nombre
   */
  set setNombre(nombre) {
    this.validarNombre = nombre;
  }

  /**
   * @param {boolean} direccion
   */
  set setDireccion(direccion) {
    this.validarDireccion = direccion;
  }

  cambioItem(dato) {
    if (dato.value != "") {
      this.validarItem = true;
    } else {
      this.validarItem = false;
    }
  }

  cambioCantidad(dato) {
    if (dato.value != 0) {
      this.validarCantidad = true;
    } else {
      this.validarCantidad = false;
    }
  }

  validacionItems(productos) {
    if (!this.validarItem) {
      document.querySelector("#label-pedido").innerHTML =
        '<span style="color:red">*Por favor seleccionar un producto para el pedido</span>';
      document.querySelector("#select").focus();
      return false;
    }
    if (!this.validarCantidad) {
      document.querySelector("#label-pedido").innerHTML =
        '<span style="color:red">*Por favor seleccionar la cantidad de producto que desea ordenar</span>';
      document.querySelector("#cantidad-producto").focus();
      return false;
    } else {
      let isVisible = $("#informacion").is(":visible");
      if (!isVisible){
        arregloProductos = [];
        contador=1;
      }
      document.querySelector("#label-pedido").style.display = "none";
      this.addProducto(productos);
      Interfaz.mostrarMensaje("producto cargado satisfactoriamente", "success");
      return true;
    }
  }

  addProducto(producto) {
    const formulario = document.querySelector("#form-pedido");
    const listarProductos = document.querySelector("#listar-productos");
    const datosFinales = document.querySelector("#datos-finales");
    const vacia = document.querySelector("#vacia");
    const agregarProductos = document.querySelector("#columnas-formulario");
    agregarProductos.setAttribute("class", "col-sm-12 col-md-5 col-lg-4");
    formulario.style.width = "100%";
    listarProductos.setAttribute(
      "class",
      "listar-productos col-sm-12 col-md-7 col-lg-8 d-block"
    );
    vacia.setAttribute("class", "d-md-block col-md-5 col-lg-4");
    datosFinales.setAttribute(
      "class",
      "datos-finales col-sm-12 col-md-7 col-lg-8 d-block pt-5"
    );
    hijos = listarProductos.children;
    if (hijos.length === 0) {
      const titulo = document.createElement("h4");
      const mensaje = document.createElement("div");
      listarProductos.appendChild(titulo);
      listarProductos.appendChild(mensaje);
      titulo.innerText = "Listado de productos de su pedido";
      titulo.setAttribute("class", "titulo");
      titulo.setAttribute("id", "titulo-productos");
      mensaje.setAttribute("id", "padre-mensaje");
      mensaje.setAttribute("class", "padre-mensaje");
    }
    const resultado = arregloProductos.filter((productoItem) => {
      if (productoItem.producto === producto.producto) {
        productoItem.cantidad =
          parseInt(productoItem.cantidad) + parseInt(producto.cantidad);
        const añadir = document.querySelectorAll(".productosDiv");
        for (const iterator of añadir) {
          if (
            iterator.childNodes[0].childNodes[0].childNodes[0].value ===
            producto.producto
          ) {
            iterator.childNodes[0].childNodes[0].childNodes[1].innerText =
              parseInt(
                iterator.childNodes[0].childNodes[0].childNodes[1].value
              ) + parseInt(producto.cantidad);
            iterator.childNodes[0].childNodes[0].childNodes[1].value =
              iterator.childNodes[0].childNodes[0].childNodes[1].innerText;
          }
        }
      }
      return productoItem.producto === producto.producto;
    });
    if (resultado.length === 0) {
      listarProductos.style.display = 'block';
      const productosDiv = document.createElement("div");
      productosDiv.setAttribute("class", "productosDiv");
      productosDiv.setAttribute('id',`productosDiv${contador}`);
      productosDiv.setAttribute("elemento", contador);
      listarProductos.appendChild(productosDiv);
      arregloProductos.push({
        item: contador,
        producto: producto.producto,
        cantidad: parseInt(producto.cantidad),
      });
      const productoLista = document.createElement("div");
      const cardBody = document.createElement("div");
      const listaProducto = document.createElement("div");
      const cantidadPedido = document.createElement("div");
      const botonLista = document.createElement("a");
      productoLista.setAttribute("id", `producto-lista${contador}`);
      productoLista.setAttribute("class", "card text-center mb-4");
      cardBody.setAttribute("class", "card-body");
      listaProducto.setAttribute("id", `item-pedido${contador}`);
      listaProducto.setAttribute("class", "lista-producto");
      listaProducto.style.display = "inline";
      listaProducto.style.paddingRight = '15px';
      cantidadPedido.setAttribute("id", `cantidadPedido${contador}`);
      cantidadPedido.setAttribute("class", "lista-cantidad");
      cantidadPedido.style.display = "inline";
      cantidadPedido.style.paddingRight = '15px';
      botonLista.setAttribute("id", `boton-lista${contador}`);
      botonLista.setAttribute("class", "boton-lista btn btn-danger");
      botonLista.style.textDecoration = "none";
      botonLista.setAttribute("name", "borrar");
      botonLista.setAttribute("href", "#listar-productos");
      listaProducto.innerHTML = producto.producto;
      listaProducto.value = producto.producto;
      cantidadPedido.innerHTML = producto.cantidad;
      cantidadPedido.value = producto.cantidad;
      botonLista.innerText = "Borrar Item";
      cardBody.appendChild(listaProducto);
      cardBody.appendChild(cantidadPedido);
      cardBody.appendChild(botonLista);
      productoLista.appendChild(cardBody);
      productosDiv.appendChild(productoLista);
      contador = contador + 1;
    }
    datosFinales.innerHTML = `<div class="contenedor-form-final" style="box-shadow: 5px 5px 5px rgba(0,0,0,0.5);">
        <h4 class="titulo">Información para entrega del pedido</h4>
        <form id="informacion" class="py-3">
       
            <div class="form-group" id="div-nombre-empresa">
                <input type="text" name= "nombreEmpresa" class="form-control w-100 validarPedido" id="nombre-empresa" placeholder="Ingrese el nombre de su empresa">
            </div>    
      
            <div class="form-group" id="div-nombre">
                <input type="text" name= "nombreContacto" class="form-control w-100 validarPedido" id="nombre" placeholder="Ingrese su nombre completo">
            </div>    
        
            <div class="form-group" id="div-correo">
                <input type="email" name= "correo" class="form-control w-100 validarPedido" id="correo" placeholder="Digite un correo electrónico de contacto">
            </div>  
     
            <div class="combo d-flex flex-row">
              <div class="form-group w-50" id="div-direccion">
                  <input type="text" name= "direccion" class="form-control w-100 validarPedido" id="direccion" placeholder="Digite aquí la dirección de entrega">
              </div>    
              <div class="form-group w-50" id="div-telefono">
                  <input type="tel" name= "telefono" class="form-control w-100 validarPedido" id="telefono" placeholder="Teléfono de contacto">
              </div>    
            </div>
        <label id="label-pedidos" class="label-pedidos"></label>
        <button type="submit" value="enviar" id="enviarPedido" class=" boton btn btn-primary">Enviar Pedido</button>
        </form>
        </div>`;
    // const idformulario = document.querySelector('#informacion');
    this.limpiarFormularioInicial(); //se le debe colocar los parentesis
  }

  limpiarFormularioInicial() {
    const select = document.querySelector("#contenido-select");
    document.querySelector("#input-select").value = "";
    document.querySelector("#form-pedido").reset();
    select.innerHTML = `<h4 class="titulo-select" id="titulo-select">Selecciona el producto</h4>`;
  }

  limpiarFormularioEnvio() {
    document.querySelector("#informacion").reset();
  }

  eliminarProducto(elemento) {
    arregloProductos.splice(
      elemento.parentElement.parentElement.parentElement.getAttribute(
        "elemento"
      ) - 1,
      1
    );
    if (elemento.name === "borrar") {
      contador = contador - 1;
      elemento.parentElement.parentElement.parentElement.remove();
      let nodos = document.querySelectorAll(
        "#listar-productos > .productosDiv"
      );
      for (let i = 0; i <= nodos.length - 1; i++) {
        console.log("nodos", nodos);
        nodos[i].setAttribute("elemento", `${i + 1}`);
      }
    }
  }

  static mostrarMensaje(mensaje, estilo) {
    const padre = document.querySelector("#padre-mensaje");
    const divMensaje = document.createElement("div");
    padre.className = `d-block`;
    divMensaje.className = `mensaje alert alert-${estilo}`;
    divMensaje.appendChild(document.createTextNode(mensaje));
    //MOSTRAR MENSAJE EN EL DOM
    // const cabecera = document.querySelector('.cabecera');
    padre.appendChild(divMensaje);
    if (window.matchMedia("(min-width:1921px)").matches) {
      divMensaje.style.fontSize = "1.7rem";
    }
    if (
      window.matchMedia("(min-width:1441px) and (max-width:1920px)").matches
    ) {
      divMensaje.style.fontSize = "1.25rem";
    }
    if (window.matchMedia("(max-width:1024px)").matches) {
      divMensaje.style.fontSize = "1rem";
    }
    if (window.matchMedia("(max-width:992px)").matches) {
      divMensaje.style.fontSize = "1rem";
    }
    if (window.matchMedia("(max-width:768px)").matches) {
      divMensaje.style.fontSize = "0.875rem";
    }
    if (window.matchMedia("(max-width:576px)").matches) {
      divMensaje.style.fontSize = "0.875rem";
    }
    if (window.matchMedia("(max-width:425px)").matches) {
      divMensaje.style.fontSize = "0.8125rem";
    }
    if (window.matchMedia("(max-width:320px)").matches) {
      divMensaje.style.fontSize = "0.75rem";
    }

    // pedido.insertBefore(divMensaje, contenedorPedido);
    //PARA REMOVER EL MENSAJE DESPUES DE 3 SEGUNDOS USAMOS UN SETTIMEOUT
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  enFoco(entrada) {
    const valor = entrada.value;
    if (valor == "") {
      const input = document.querySelector("#" + entrada.id);
      input.style.background = "rgba(255,255,0,0.5)";
      document.querySelector("#" + entrada.id).style.border =
        "5px solid $colorPrimario";
    }
    document
      .querySelector("#div-" + entrada.id)
      .appendChild(document.createElement("div"))
      .setAttribute("class", "error");
  }

  fueraFoco(entrada) {
    document.querySelector("#" + entrada.id).style.background = "#fff";
  }

  cambiosEntrada(entrada) {
    const valor = entrada.value;
    // let telefono = false;
    let expresionRegular = null;
    if (!valor == "") {
      switch (entrada.id) {
        case "telefono":
          // expresionRegular = /^\-[0-9]{7,14}$|^[0-9]{7,14}$/;
          expresionRegular = /^\d{7,14}$/;
          if (!expresionRegular.test(valor)) {
            document.querySelector("#div-" + entrada.id + " .error").innerHTML =
              '<span style="color:red">*ERROR al ingresar su numero telefónico: ' +
              entrada.placeholder +
              "</span>";
            this.validarTelefono = false;
          } else {
            document
              .querySelector("#div-" + entrada.id)
              .removeChild(
                document.querySelector("#div-" + entrada.id + " > .error")
              );
            this.validarTelefono = true;
          }

          break;
        case "correo":
          expresionRegular = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (!expresionRegular.test(valor)) {
            document.querySelector("#div-" + entrada.id + " .error").innerHTML =
              '<span style= "color:red">*ERROR al ingresar el Email :' +
              entrada.placeholder +
              "</span>";
            this.validarCorreo = false;
          } else {
            document
              .querySelector("#div-" + entrada.id)
              .removeChild(
                document.querySelector("#div-" + entrada.id + " > .error")
              );
            const correo = true;
            this.setCorreo = correo;
          }
          break;
      }
    } else {
      document
        .querySelector("#div-" + entrada.id)
        .removeChild(
          document.querySelector("#div-" + entrada.id + " > .error")
        );
    }
  }

  cambioEmpresa(dato) {
    if (dato.value != "") {
      this.validarEmpresa = true;
    } else {
      this.validarEmpresa = false;
    }
  }

  cambioNombre(dato) {
    if (dato.value != "") {
      this.validarNombre = true;
    } else {
      this.validarNombre = false;
    }
  }

  cambioDireccion(dato) {
    if (dato.value != "") {
      this.validarDireccion = true;
    } else {
      this.validarDireccion = false;
    }
  }

  validarFormulario() {
    if (!this.validarEmpresa) {
      document.querySelector("#label-pedidos").innerHTML =
        '<span class="mensaje" style="color:red">*El nombre de la empresa no debe estar en blanco para enviar su pedido, por favor diligencielo</span>';
      document.querySelector("#nombre-empresa").focus();
      return false;
    }
    if (!this.validarNombre) {
      document.querySelector("#label-pedidos").innerHTML =
        '<span class="mensaje" style="color:red">*Su nombre de contacto no debe estar en blanco para enviar su pedido, por favor diligencielo</span>';
      document.querySelector("#nombre").focus();
      return false;
    }
    if (!this.validarTelefono || !this.validarCorreo) {
      if (document.querySelector("#telefono").value == "") {
        document.querySelector("#label-pedidos").innerHTML =
          '<span class="mensaje" style="color:red">*El telefono de su empresa debe estar incluido en el pedido, por favor diligencielo</span>';
        document.querySelector("#telefono").focus();
        return false;
      } else if (document.querySelector("#correo").value == "") {
        document.querySelector("#label-pedidos").innerHTML =
          '<span class="mensaje" style="color:red">*El correo de contacto de su empresa debe estar incluido en el pedido, por favor diligencielo</span>';
        document.querySelector("#correo").focus();
        return false;
      } else {
        document.querySelector("#label-pedidos").innerHTML =
          '<span class="mensaje" style="color:red">*Su formulario tiene errores en los datos que ha ingresado favor revisar para poder enviar su formulario</span>';
        return false;
      }
    }

    if (!this.validarDireccion) {
      document.querySelector("#label-pedidos").innerHTML =
        '<span class="mensaje" style="color:red">*La dirección de su empresa debe estar incluida en el pedido, por favor diligencielo</span>';
      document.querySelector("#direccion").focus();
      return false;
    } else {
      // document.querySelector("#label-pedidos").innerHTML =
      //   '<span class="mensaje" style="color:green">Su formulario ha sido validado con éxito</span>';
      this.enviarCorreoPedido();
      return true;
    }
  }

  enviarCorreoPedido() {
    enviarCorreo(arregloProductos);
    // this.limpiarFormularioEnvio();
    // alert("Envio de Correos en construcción");
  }
}
