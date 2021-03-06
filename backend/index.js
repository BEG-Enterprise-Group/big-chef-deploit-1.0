if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}
const express = require("express");

/**
 * INICIALIZACIONES
 */
const app = express();
const corsServer = require('cors');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');


/**
 * CONFIGURACIONES
 */
app.set("port", process.env.PORT || 3000);

/**
 * MIDDLEWARES
 */
app.use(morgan('dev'));
app.use(corsServer());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use((req, res, next) => {
//    res.header("Access-Control-Allow-Origin", "*")
//})



/**
 * ROUTES
 */
app.use('/api', require('./routes/index'));


/**
 * * CARPETA PUBLICA
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * ARRANCANDO EL SERVIDOR
 */
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get('port')}`);
});