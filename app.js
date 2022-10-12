const express = require('express');

const app = express(); // se crea instancia de express

const fileUpload = require('express-fileupload')
const cors = require('cors')
/**
 * importación de rutas
 */
const tipoEquipo = require('./routes/tipoEquipoRouter')
const estado = require('./routes/estadoRouter')
const marca = require('./routes/marcaRouter')
const usuario = require('./routes/usuarioRouter')
const inventario = require('./routes/inventarioRouter')
/**
 * middlewares
 */
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cors());
/**
 * Utilizar sustantivos en plural para una URI
 */
app.use('/api/tipoequipos', tipoEquipo)
app.use('/api/estados', estado) 
app.use('/api/marcas', marca) 
app.use('/api/usuarios', usuario);
app.use('/api/inventarios', inventario)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'pagina no encontrada'
    });
});

module.exports = app;