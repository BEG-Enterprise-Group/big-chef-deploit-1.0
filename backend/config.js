module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT_BIG_CHEF: process.env.PORT_BIG_CHEF || 3000,
    MAIL_HOST: process.env.MAIL_HOST || 'smtp.hostinger.co',
    MAIL_PORT: process.env.MAIL_PORT || 587,
    MAIL_PEDIDOS: process.env.MAIL_PEDIDOS || 'pedidos@districaribesas.com',
    MAIL_VENTAS: process.env.MAIL_VENTAS || 'ventas@districaribesas.com',
    MAIL_CONTACTO: process.env.MAIL_CONTACTO || 'contacto@districaribesas.com',
    MAIL_PASSWORD: process.env.MAIL_PASSWORD || '5ERVER2@195f5',
    MAIL_USER_RESP: process.env.MAIL_USER_RESP || 'atencioncliente@districaribesas.com',
    MAIL_CORREOS: process.env.MAIL_CORREOS || 'transportecorreos@districaribesas.com'
}