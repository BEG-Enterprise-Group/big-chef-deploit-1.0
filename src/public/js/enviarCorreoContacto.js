import axios from "axios";
import {Interfaz} from './interfaceContacto';

export const enviarCorreo = ()=>{
  const correo  = document.querySelector('#correoContacto').value;
  const nombre = document.querySelector('#nombreContacto').value;
  const mensaje = document.querySelector('#mensajeContacto').value;
  const contacto = document.querySelector('#telefonoContacto').value;

  const datos = {
      n : nombre,
      c : contacto,
      m : correo,
      i : mensaje
  };
  axios.post('/send-email',datos).then(()=>{
      document.querySelector("#label-enviar").innerHTML = '<span class="mensaje" style="color:green">Su petición ha sido enviada con éxito</span>';
      const limpiar = new Interfaz();
      limpiar.limpiarContacto();
      axios.post('/respuesta-email',datos).then(()=>{
        console.log('respuesta enviada');
      }).catch((error)=>{
        console.log(error);
      });
    }).catch((error)=>{
      document.querySelector("#label-enviar").innerHTML = '<span class="mensaje" style="color:red">*Su petición no pudo ser enviada por alguna circunstancia por favor intentelo nuevamente</span>';
    console.log(error);
    });
      
  };

