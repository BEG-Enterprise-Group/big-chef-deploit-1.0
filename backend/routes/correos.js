const router = require("express").Router();
const nodemailer = require("nodemailer");
const {crearPedido} = require('../pdf/crearPedido');
const path = require('path');

router.get("/", (req, res) => {
  res.json({ message: "Estas conectado a la API. Recurso: correos" });
});

router.post("/contactenos", async (req, res) => {
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
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },

    tls: {
      rejectUnauthorized: false,
    },
  });

  let opciones = {
    from: `SECCION CONTACTENOS <test@smartfleetsolution.com>`,
    to: "test@smartfleetsolution.com",
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
      }
    } catch (err) {
      console.log(err);
    }
  });
});

router.post("/respuesta", async (req, res) => {
  const { nombre, correo } = req.body;
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER_RESP,
      pass: process.env.MAIL_PASSWORD,
    },

    tls: {
      rejectUnauthorized: false,
    },
  });

  let opciones = {
    from: `Districaribe SAS <noreply@smartfleetsolution.com>`,
    to: `${correo}`,
    subject: `Gracias por contactarnos.....`,
    html: `
              <p style="font-size: 16px">Hola <b>${nombre} te saluda la familia Districaribe SAS.</b></p>
              <br>
              <p style="font-size: 16px">Tu mensaje es muy importante para nosotros. Si necesitamos ponernos en contacto contigo lo haremos lo mas pronto posible.</p>
              <br>
              <p style="font-size: 16px">Gracias por elegir nuestros productos <b>BIG CHEF</b> y muchos exitos.</p>
          `,
  };

  await transporter.sendMail(opciones, (error, info) => {
    try {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log("Mensaje Enviado: %s", info.messageId);
        res.status(200).jsonp(req.body);
      }
    } catch (err) {
      console.log(err);
    }
  });
});

router.post("/pedidos", async (req, res) => {
  const { empresa,nombrePedido,correoPedido,direccionPedido,telefonoPedido,pedido } = req.body;
  const a = 100;
  const b = 10000;
  const numero = (a,b)=>{
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  let contador=1000;

  const invoice = {
    direccion: {
      nombrePedido,
      empresa,
      direccionPedido,
    },
    items : pedido,
    subtotal: 8000,
    paid: 0,
    invoice_nr: numero(a,b)
    
  }
  crearPedido(invoice,path.join(__dirname,'../',`pdf/pedido.pdf`));
  contentHTML = `<h1>Correo enviado a traves de nuestro portal web</h1>
                <p style="font-size:16px;">Este correo es generado por nuestra plataforma para la captura y recepción de nuevos pedidos a través de nuestra seccion pedidos </p>
                <p style="font-size:16px;"><b>Mensaje: </b>Hemos recibido un nuevo pedido desde el cliente <b>${nombrePedido}</b></p>
                <p style="font-size:16px;">La información de contacto del cliente esta detallada a continuación</p>
                <ul style="list-style:none;">
                    <li style="font-size:18px;">Empresa que nos envia el pedido: <b>${empresa}</b></li>
                    <li style="font-size:18px;">Nombre del Cliente: <b>${nombrePedido}</b></li>
                    <li style="font-size:18px;">Correo del Cliente: <b>${correoPedido}</b></li>
                    <li style="font-size:18px;">Dirección de entrega del pedido: <b>${direccionPedido}</b></li>
                    <li style="font-size:18px;">Telefono del Cliente: <b>${telefonoPedido}</b></li>
                </ul>
                `;
   
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },

    tls: {
      rejectUnauthorized: false,
    },
  });

  let opciones = {
    from: `PEDIDOS <test@smartfleetsolution.com>`,
    to: "test@smartfleetsolution.com",
    subject: `Correo enviado desde formulario de pedidos de districaribesas.com por ${empresa} `,
    html: contentHTML,
    attachments: [
      {
        filename: 'pedido.pdf',
        path: 'backend/pdf/pedido.pdf'
      }
    ]
  };

  await transporter.sendMail(opciones, (error, info) => {
    try {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log("Mensaje Enviado: %s", info.messageId);
        res.status(200).jsonp(req.body);
      }
    } catch (err) {
      console.log(err);
    }
  });
});

router.post("/respuestaPedido", async (req, res) => {
  const { empresa,nombrePedido,correoPedido,direccionPedido,telefonoPedido,pedido } = req.body;
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER_RESP,
      pass: process.env.MAIL_PASSWORD,
    },

    tls: {
      rejectUnauthorized: false,
    },
  });

  let opciones = {
    from: `Districaribe SAS <noreply@smartfleetsolution.com>`,
    to: `${correoPedido}`,
    subject: `Gracias por elegir nuestros productos.....`,
    html: `
              <p style="font-size: 16px">Hola <b>${nombrePedido} te saluda la familia Districaribe SAS.</b></p>
              <br>
              <p style="font-size: 16px">El pedido para <b>${empresa}</b> es muy importante para nosotros. Nos ponernos en contacto contigo para confirmar y ultimar detalles en tu orden.</p>
              <br>
              <p style="font-size: 16px">Gracias por elegir nuestros productos <b>BIG CHEF</b> y muchos exitos.</p>
          `,
    attachments: [
      {
        filename: 'pedido.pdf',
        path: 'backend/pdf/pedido.pdf'
      }
    ]
  };

  await transporter.sendMail(opciones, (error, info) => {
    try {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log("Mensaje Enviado: %s", info.messageId);
        res.status(200).jsonp(req.body);
      }
    } catch (err) {
      console.log(err);
    }
  });
});



module.exports = router;
