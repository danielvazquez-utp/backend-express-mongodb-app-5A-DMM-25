const express = require('express');
const router = express.Router();
const {
    getItems,
    getItemsById,
    getItemsByType,
    createItem,
    updateItemById,
    deleteItemById
} = require('../controllers/item.controller');

// Endpoint para la recuperación de la colección de items
router.get('/all', getItems);
// Endopint para la recuperación de un item
router.get('/byId/:id', getItemsById);
// Endpoint para la recuperación de un item usando su nickname
router.get('/byType/:type', getItemsByType);
// Endpoint para la creación de un item
router.post('/add', createItem);
// Endpoint para la actualización de un item
router.put('/update/:id', updateItemById);
// Endpoint para la eliminación de un item
router.delete('/delete/:id', deleteItemById);

module.exports = router;