const router = require("express").Router();
const nodemailer = require("nodemailer");
const { crearPedido } = require('../pdf/crearPedido');
const fs = require('fs');
const path = require('path');

router.get("/", (req, res) => {
    res.json({ message: "Estas conectado a la API. Recurso: correos" });
});

router.post("/contactenos", async(req, res) => {
    const { nombre, contacto, correo, mensaje } = req.body;
    contentHTML = `
                <h1>Correo enviado a traves de nuestro portal web</h1>
                <p style="font-size:16px;">Este correo es generado por nuestro correo interno para la recepción de la informacion a través de nuestra seccion de contactos </p>
                <ul style="list-style:none;">
                    <li style="font-size:18px;">Nombre del Cliente: <b>${nombre}</b></li>
                    <li style="font-size:18px;">Telefono del Cliente: <b>${contacto}</b></li>
                    <li style="font-size:18px;">Correo del Cliente: <b>${correo}</b></li>
                </ul>
                <p style="font-size:16px;"><b>Mensaje:</b> ${mensaje}</p>
            `;
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_CONTACTO,
            pass: process.env.MAIL_PASSWORD,
        },

        tls: {
            rejectUnauthorized: false,
        },
    });

    let opciones = {
        from: `${nombre} <${process.env.MAIL_CONTACTO}>`,
        to: `${process.env.MAIL_USER_RESP},${process.env.MAIL_VENTAS}`,
        subject: `Correo enviado desde formulario de contactos de districaribesas.com por ${nombre} `,
        html: contentHTML,
    };

    await transporter.sendMail(opciones, (error, info) => {
        try {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("Mensaje Enviado: %s", info.messageId);
                res.status(200).jsonp(req.body);
                transporter.close();
            }
        } catch (err) {
            console.log(err);
        }
    });
});

router.post("/respuesta", async(req, res) => {
    const { nombre, correo } = req.body;
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER_RESP,
            pass: process.env.MAIL_PASSWORD,
        },

        tls: {
            rejectUnauthorized: false,
        },
    });

    let opciones = {
        from: `Districaribe SAS <${process.env.MAIL_USER_RESP}>`,
        to: `${correo}`,
        subject: `Gracias por contactarnos.....`,
        html: `<p style="font-size:16px"> Hola <b>${nombre}</b> te saluda la familia Districaribe SAS.</p>
               <br>
               <p style="font-size:16px">Tu mensaje es muy importante para nosotros.Si necesitamos ponernos en contacto contigo lo haremos lo mas pronto posible.</p> 
               <br>
               <p style="font-size:16px">Gracias por elegir nuestros productos <b>BIG CHEF</b> y muchos exitos.</p>`,
    };

    await transporter.sendMail(opciones, (error, info) => {
        try {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("Mensaje Enviado: %s", info.messageId);
                res.status(200).jsonp(req.body);
                transporter.close();
            }
        } catch (err) {
            console.log(err);
        }
    });
});

router.post("/pedidos", async(req, res) => {
    const { empresa, nombrePedido, correoPedido, direccionPedido, telefonoPedido, pedido, codigo } = req.body;
    const a = 100;
    const b = 10000;
    const numero = (a, b) => {
        return Math.round(Math.random() * (b - a) + parseInt(a));
    }



    const invoice = {
        direccion: {
            nombrePedido,
            empresa,
            direccionPedido,
        },
        items: pedido,
        // subtotal: 8000,
        // paid: 0,
        invoice_nr: numero(a, b)

    }
    crearPedido(invoice, path.join(__dirname, '../', `/pdf/pedido${codigo}.pdf`));
    contentHTML = `<h1>Correo enviado a traves de nuestro portal web </h1> 
                   <p style="font-size:16px;">Este correo es generado por nuestra plataforma para la captura y recepción de nuevos pedidos a través de nuestra seccion pedidos</p>
                   <p style="font-size:16px;"><b>Mensaje: </b>Hemos recibido un nuevo pedido desde el cliente <b>${nombrePedido}</b></p>
                   <p style="font-size:16px;">La información de contacto del cliente esta detallada a continuación</p> 
                   <ul style="list-style:none;">
                    <li style="font-size:18px;">Empresa que nos envia el pedido: <b>${empresa}</b></li>
                    <li style="font-size:18px;">Nombre del Cliente: <b>${nombrePedido}</b></li>
                    <li style="font-size:18px;">Correo del Cliente: <b>${correoPedido}</b></li>
                    <li style="font-size:18px;">Dirección de entrega del pedido: <b>${direccionPedido}</b></li>
                    <li style="font-size:18px;">Telefono del Cliente: <b>${telefonoPedido}</b></li>
                   </ul>`;

    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_PEDIDOS,
            pass: process.env.MAIL_PASSWORD,
        },

        tls: {
            rejectUnauthorized: false,
        },
    });

    let opciones = {
        from: `${empresa}<${process.env.MAIL_PEDIDOS}> `,
        to: `${process.env.MAIL_VENTAS},${process.env.MAIL_PEDIDOS}`,
        subject: `Correo enviado desde formulario de pedidos de districaribesas.com por la empresa <b>${empresa}</b>`,
        html: contentHTML,
        attachments: [{
            path: `backend/pdf/pedido${codigo}.pdf`
        }]
    };

    await transporter.sendMail(opciones, (error, info) => {
        try {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("Mensaje Enviado: %s", info.messageId);
                res.status(200).jsonp(req.body);
                transporter.close();
            }
        } catch (err) {
            console.log(err);
        }
    });
});

router.post("/respuesta-pedido", async(req, res) => {
    const { empresa, nombrePedido, correoPedido, direccionPedido, telefonoPedido, pedido, codigo } = req.body;
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER_RESP,
            pass: process.env.MAIL_PASSWORD,
        },

        tls: {
            rejectUnauthorized: false,
        },
    });

    let opciones = {
        from: `Districaribe SAS <${process.env.MAIL_USER_RESP}>`,
        to: `${correoPedido}`,
        subject: `Gracias por elegir nuestros productos.....`,
        html: `<p style="font-size: 16px">Hola <b>${nombrePedido} te saluda la familia Districaribe SAS.</b></p>
               <br>
               <p style="font-size: 16px">El pedido para <b>${empresa},</b> es muy importante para nosotros. Nuesro departamento de ventas ventas[@]districaribesas.com se pondra en contacto con ustedes a la brevedad posible para confirmar y ultimar detalles en tu orden.</p>
               <br>
               <p style="font-size: 16px">Gracias por elegir nuestros productos <b>BIG CHEF</b> y muchos exitos.</p>
                    `,
        attachments: [{
            path: `backend/pdf/pedido${codigo}.pdf`
        }]
    };

    await transporter.sendMail(opciones, (error, info) => {
        try {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("Mensaje Enviado: %s", info.messageId);
                res.status(200).jsonp(req.body);
                transporter.close();
                setTimeout(() => {
                    const filePath = path.join(__dirname, '../', `/pdf/pedido${codigo}.pdf`);
                    console.log('File Borrado', filePath);
                    fs.unlinkSync(filePath);
                }, 3000);
            }
        } catch (err) {
            console.log(err);
        }
    });
});



module.exports = router;