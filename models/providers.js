const mongoose = require('mongoose');

const objectSchema = {
    company_name: String,
    CIF: String,
    address: String,
    url_web: String
}

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
