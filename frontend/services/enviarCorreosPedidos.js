

export class EnvioCorreosPedidos{
    constructor(){
        this.URI = "https://big-chef.herokuapp.com/api/correos/pedidos";
    }

    async postEmail(correo){
        const response = await fetch(this.URI,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(correo),
        });
        const data = await response.json();
        console.log(data);
    }
}