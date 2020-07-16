const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async (req, res) => {
  contentHTML = `
              <h1>Correo enviado a traves de nuestro portal web</h1>
              <p style="font-size:16px;">Este correo es generado por nuestro correo interno para la recepción de la informacion a través de nuestra seccion de contactos </p>
              <ul style="list-style:none;">
                  <li style="font-size:18px;">Nombre del Cliente: <b>${req.body.n}</b></li>
                  <li style="font-size:18px;">Telefono del Cliente: <b>${req.body.c}</b></li>
                  <li style="font-size:18px;">Correo del Cliente: <b>${req.body.m}</b></li>
              </ul>
              <p style="font-size:16px;"><b>Mensaje:</b> ${req.body.i}</p>
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
    subject: `Correo enviado desde formulario de contactos de districaribesas.com por ${req.body.n} `,
    html : contentHTML
  };

  await transporter.sendMail(opciones, (error, info) => {
    try {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log('Mensaje Enviado: %s',info.messageId);
        res.status(200).jsonp(req.body);
      }
    }catch (err) {
      console.log(err);
    } 
  });
});

router.post("/respuesta-email", async (req, res) => {
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
        to: `${req.body.m}`,
        subject: `Gracias por contactarnos.....`,
        html : `
            <p style="font-size: 16px">Hola <b>${req.body.n} te saluda la familia Districaribe SAS.</b></p>
            <br>
            <p style="font-size: 16px">Tu mensaje es muy importante para nosotros. Si necesitamos ponernos en contacto contigo lo haremos lo mas pronto posible.</p>
            <br>
            <p style="font-size: 16px">Gracias por elegir nuestros productos <b>BIG CHEF</b> y muchos exitos.</p>
        `
    };
  
    await transporter.sendMail(opciones, (error, info) => {
        try {
          if (error) {
            res.status(500).send(error.message);
          } else {
            console.log('Mensaje Enviado: %s',info.messageId);
            res.status(200).jsonp(req.body);
          }
        }catch(err){
            console.log(err);
        }
    }); 
});  





module.exports = router;
