import {enviarCorreo} from './enviarCorreoContacto';

export class Interfaz {
  constructor() {
    this.validarNombre = false;
    this.validarTelefono = false;
    this.valdarCorreo = false;
    this.validarMensaje = false;
  }
  get getNombre() {
    return this.validarNombre;
  }
  get getTelefono() {
    return this.validarTelefono;
  }
  get getCorreo() {
    return this.validarCorreo;
  }
  get getMensaje() {
    return this.validarMensaje;
  }
  /**
   * @param {boolean} nombre
   */
  set setNombre(nombre) {
    this.validarNombre = nombre;
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
   * @param {boolean} mensaje
   */
  set setMensaje(mensaje) {
    this.validarMensaje = mensaje;
  }

  limpiarContacto(){
    document.querySelector("#formulario-contacto").reset();
  }

  enFoco(entrada){
    document
    .querySelector("#div-" + entrada.id)
    .appendChild(document.createElement("div"))
    .setAttribute("class", "error");
  }

  cambioNombre(dato){
      if (dato.value != ""){
          this.validarNombre = true;
      }else{
          this.validarNombre = false;
      }
  }

  cambioMensaje(dato){
    if (dato.value != ""){
        this.validarMensaje = true;
    }else{
        this.validarMensaje = false;
    }
  }

  cambioEntrada(entrada) {
    const valor = entrada.value;
    // let telefono = false;
    let expresionRegular = null;
    if (!valor == "") {
      switch (entrada.id) {
        case "telefonoContacto":
          expresionRegular = /^\-[0-9]{1,20}$|^[0-9]{1,20}$/;
          if (!expresionRegular.test(valor) || valor.length != 10) {
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
        case "correoContacto":
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
  validarContacto(){
      if (!this.validarNombre) {
        document.querySelector("#label-enviar").innerHTML =
          '<span class="mensaje" style="color:red">*Su nombre de contacto no debe estar en blanco para enviar su petición, por favor diligéncielo</span>';
        document.querySelector("#nombreContacto").focus();
        return false;
      }
      if (!this.validarTelefono || !this.validarCorreo) {
        if (document.querySelector("#telefonoContacto").value == "") {
          document.querySelector("#label-enviar").innerHTML =
            '<span class="mensaje" style="color:red">*Su numero de contacto es muy importante para nosotros, por favor diligéncielo</span>';
          document.querySelector("#telefonoContacto").focus();
          return false;
        } else if (document.querySelector("#correoContacto").value == "") {
          document.querySelector("#label-enviar").innerHTML =
            '<span class="mensaje" style="color:red">*El correo de contacto de su empresa debe estar incluido en el pedido, por favor diligéncielo</span>';
          document.querySelector("#correoContacto").focus();
          return false;
        } else {
          document.querySelector("#label-enviar").innerHTML =
            '<span class="mensaje" style="color:red">*Su formulario tiene errores en los datos que ha ingresado favor revisar para poder enviar su petición</span>';
          return false;
        }
      }
  
      if (!this.validarMensaje) {
        document.querySelector("#label-enviar").innerHTML =
          '<span class="mensaje" style="color:red">*Su petición es muy importante para nosotros, por favor diligénciela</span>';
        document.querySelector("#mensajeContacto").focus();
        return false;
      } else {
        // document.querySelector("#label-enviar").innerHTML =
        //   '<span class="mensaje" style="color:green">Su petición ha sido validado con éxito</span>';
        this.enviarCorreoContacto();
        return true;
      }
      
  }
  enviarCorreoContacto(){
      enviarCorreo();
  }
}

