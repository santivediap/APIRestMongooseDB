const mongoose = require('mongoose');

const objectSchema = {
    title: String,
    price: Number,
    description: String,
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    }
}

// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
