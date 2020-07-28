import { Respuesta } from "./respuestaAutomaticaContactenos";
import {Interfaz} from '../js/interfaceContacto';
export class EnvioCorreosContactenos {
  constructor() {
    this.URI = "https://big-chef.herokuapp.com/api/correos/contactenos";
  }

  async postEmail(correo) {
    const response = await fetch(this.URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(correo),
    });
    const data  = await response.json();
    console.log(data);
  }
}
