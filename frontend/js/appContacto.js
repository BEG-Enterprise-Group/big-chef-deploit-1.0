import {} from './interfaceContacto';
import { Interfaz } from './interfaceContacto';
let nombre,telefono,correo,mensaje;
document.querySelector('#formulario-contacto').addEventListener('change',()=>{
    const entradas = document.querySelectorAll('#formulario-contacto input.validar');
    const nombreId = document.querySelector('#nombreContacto');
    // const telefonoId = document.querySelector('#telefono');
    // const correoId = document.querySelector('#correo');
    const mensajeId = document.querySelector('#mensajeContacto');
    const validarContacto = new Interfaz();
    for (const elemento of entradas){
        elemento.addEventListener('focus',validarContacto.enFoco(elemento));
        elemento.addEventListener('change',validarContacto.cambioEntrada(elemento));

    }
    nombreId.addEventListener('change',validarContacto.cambioNombre(nombreId));
    mensajeId.addEventListener('change',validarContacto.cambioMensaje(mensajeId));
    nombre = validarContacto.getNombre;
    telefono = validarContacto.getTelefono;
    correo = validarContacto.getCorreo;
    mensaje = validarContacto.getMensaje;
});

document.querySelector('#formulario-contacto').addEventListener('submit',(e)=>{
    e.preventDefault();
    const enviarContacto = new Interfaz();
    enviarContacto.setNombre = nombre;
    enviarContacto.setTelefono = telefono;
    enviarContacto.setCorreo = correo;
    enviarContacto.setMensaje = mensaje;
    enviarContacto.validarContacto();
    
});
