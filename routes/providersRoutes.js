const express = require('express');

// Rutas de productos
const providersApiController = require("../controllers/providersController");
const providersApiRouter = express.Router();

providersApiRouter.post('/', providersApiController.createProvider);
providersApiRouter.get('/', providersApiController.getProviders);
providersApiRouter.put('/', providersApiController.updateProvider);
providersApiRouter.delete('/', providersApiController.deleteProvider);

module.exports = providersApiRouter;