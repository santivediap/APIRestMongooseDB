const Provider = require('../models/providers')

// GET -> http://localhost:3000/api/providers
// Obtiene todos los providers en la BBDD

const getProviders = async (req, res) => {

    const providers = await Provider
        .find({}, '-_id -__v')

    res.status(200).json(providers)
}

// POST -> http://localhost:3000/api/providers
// Crea un nuevo provider en la BBDD

// {
//     "company_name": "Teatro Marquina",
//     "CIF": "B40236882",
//     "address": "Calle de Prim 11",
//     "url_web": "https://www.tortillasmarquina.com"
// }

const createProvider = async (req, res) => {

    const { company_name, CIF, address, url_web } = req.body;

    const provider = new Provider({
        company_name,
        CIF,
        address,
        url_web
    });

    const result = await provider.save();
    res.status(201).json({
        message: `proveedor creado`,
        product: req.body
    })
}

// PUT -> http://localhost:3000/api/providers
// Actualiza un provider en la BBDD

// {
//     "company_name": "Teatro Marquina",
//     "CIF": "B40236882",
//     "address": "Calle del Primo 14",
//     "url_web": "https://www.tortillasmarquina.com",
//     "new_company_name": "Teatro Tortilla"
// }

const updateProvider = async (req, res) => {

    const { company_name, CIF, address, url_web, new_company_name} = req.body;
    
    const provider = await Provider
    .findOneAndUpdate({company_name: company_name}, {company_name: new_company_name, CIF, address, url_web})
    .select('-_id -__v')

    res.status(200).json({
        message: `provider actualizado`,
        updated_provider: provider
    })
}

// DELETE -> http://localhost:3000/api/providers
// Borra un provider en la BBDD

// {
//     "company_name": "Teatro Marquina"
// }

const deleteProvider = async (req, res) => {
    const { company_name } = req.body;

    const provider = await Provider
    .findOneAndDelete({company_name: company_name})
    .select('-_id -__v')

    res.status(200).json({
        message: `provider borrado`,
        deleted_provider: provider
    })
}

module.exports = {
    createProvider,
    getProviders,
    updateProvider,
    deleteProvider
}