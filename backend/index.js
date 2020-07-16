if (process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');


/**
 * WEBPACK
 */

// const webpack = require ('webpack');
// const webpackMiddleware = require ('webpack-dev-middleware');
// const webpackConfig = require ('../webpack.config');

/**
 * MIDDLEWARE   
 */

    // app.use(webpackMiddleware(webpack(webpackConfig)));
    
    
    /**
     * ENTENDER LOS DATOS DE UN FORMULARIO
     */
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    
    
    
    /**
     * RUTA PARA EL ENVIO A TRAVEZ DEL METODO POST
     */
    app.use(require('./routes/index'));
    
    /**
     * CONFIGURACION DEL PUERTO
     */

    app.set('port',process.env.PORT || 3000);


    /**
     * CARPETA PUBLICA 
     */
    // app.use(express.static(__dirname + '/dist'));

    app.use(express.static(path.resolve(__dirname,'public')));
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,'index.html'));
    // });

    /**
     * ARRANCANDO EL SERVIDOR
     */
    app.listen(app.get('port'),()=>{
        console.log(`Server on port ${app.get('port')}`);
    });

    
    



