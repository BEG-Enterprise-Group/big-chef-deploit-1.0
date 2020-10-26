import { EnvioCorreosContactenos } from '../services/enviarCorreosContactenos';
import { RespuestaContactenos } from '../services/respuestaAutomaticaContactenos';
import { Interfaz } from '../js/interfaceContacto';


export const enviarCorreo = () => {
    const nombre = document.querySelector('#nombreContacto').value;
    const contacto = document.querySelector('#telefonoContacto').value;
    const correo = document.querySelector('#correoContacto').value;
    const mensaje = document.querySelector('#mensajeContacto').value;

    const datos = { nombre, contacto, correo, mensaje };


    const envioCorreos = new EnvioCorreosContactenos();
    envioCorreos.postEmail(datos)
        .then(() => {
            document.querySelector("#label-enviar").innerHTML = '<span class="mensaje" style="color:green">Su petición ha sido enviada con éxito</span>';
            const limpiar = new Interfaz();
            limpiar.limpiarContacto();
            const respuesta = new RespuestaContactenos();
            respuesta.postEmail(datos).then(() => {
                    console.log('respuesta enviada Satisfactoriamente');
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            document.querySelector("#label-enviar").innerHTML = '<span class="mensaje" style="color:red">*Su petición no pudo ser enviada por alguna circunstancia por favor intentelo nuevamente</span>';
            console.log(error);
        });

};