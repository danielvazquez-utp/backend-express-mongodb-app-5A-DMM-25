const express = require('express');
const router = express.Router();
const {
    getLocations,
    getLocationsById,
    getLocationsByType,
    createLocation,
    updateLocationById,
    deleteLocationById
} = require('../controllers/location.controller');

// Endpoint para la recuperación de la colección de items
router.get('/all', getLocations);
// Endopint para la recuperación de un item
router.get('/byId/:id', getLocationsById);
// Endpoint para la recuperación de un item usando su nickname
router.get('/byType/:type', getLocationsByType);
// Endpoint para la creación de un item
router.post('/add', createLocation);
// Endpoint para la actualización de un item
router.put('/update/:id', updateLocationById);
// Endpoint para la eliminación de un item
router.delete('/delete/:id', deleteLocationById);

module.exports = router;