require('./utils/db_mongo')
const express = require('express')
const morgan = require('./utils/morgan')
const error404 = require('./middlewares/error404')

// Módulos de rutas
const providersApiRoutes = require('./routes/providersRoutes')
const productsApiRoutes = require('./routes/productsRoutes')

const app = express()

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.get('/', (req, res) => {
    res.json({msg: "Estas en la home"})
})

app.use('/api/providers', providersApiRoutes); // Rutas API providers
app.use('/api/products', productsApiRoutes); // Rutas API providers

app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(3000, () => {
    console.log('Example app listening on port http://localhost:3000')
})