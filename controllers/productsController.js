const Product = require('../models/products')
const Provider = require('../models/providers')

// GET -> http://localhost:3000/api/products
// Obtiene todos los productos en la BBDD

const getProducts = async (req, res) => {

    const product = await Product
        .find()
        .populate('provider', 'company_name -_id')
        .select('title provider description price -_id');

    res.status(200).json(product)
}

// POST -> http://localhost:3000/api/products
// Crea un nuevo producto en la BBDD

// {
//     "title": "Tortilla",
//     "price": 10,
//     "description": "La mejor tortilla del mundo AKA Marquina",
//     "provider": "Teatro Marquina"
// }

const createProduct = async (req, res) => {

    const { title, price, description, provider } = req.body

    const searchProvider = await Provider.find({company_name: provider}, {returnOriginal: false});
    const provider_id = searchProvider[0]._id.toString()

    const product = new Product({
        title,
        price,
        description,
        provider: provider_id
    });

    const result = await product.save();
    res.status(201).json({
        message: `producto creado`,
        product: req.body
    })
}

// PUT -> http://localhost:3000/api/providers
// Actualiza un producto en la BBDD

// {
//     "title": "Tortilla",
//     "price": 10,
//     "description": "La mejor tortilla del mundo AKA Marquina",
//     "provider": "Teatro Marquina",
//     "new_title": "TORTILLAAAAAA"
// }

const updateProduct = async (req, res) => {
    const { title, price, description, provider, new_title} = req.body;

    const searchProvider = await Provider.find({company_name: provider});
    const provider_id = searchProvider[0]._id.toString()
    
    const product = await Product
    .findOneAndUpdate({title: title}, {title: new_title, price, description, provider_id}, {returnOriginal: false})
    .select('-_id -__v')

    res.status(200).json({
        message: `producto actualizado`,
        updated_product: product
    })
}

// DELETE -> http://localhost:3000/api/products
// Borra un producto en la BBDD

// {
//     "title": "Tortilla"
// }

const deleteProduct = async (req, res) => {

    const { title } = req.body

    const product = await Product
    .findOneAndDelete({title: title})
    .select('-_id -__v')

    res.status(200).json({
        message: `producto borrado`,
        deleted_product: product
    })
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}