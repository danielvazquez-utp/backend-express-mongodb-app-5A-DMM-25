const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUsersById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../controllers/user.controller');

// Endpoint para la recuperación de la colección de usuarios
router.get('/', getUsers);
// Endopint para la recuperación de un usuario
router.get('/:id', getUsersById);
// Endpoint para la creación de un usuario
router.post('/', createUser);
// Endpoint para la actualización de un usuario
router.put('/:id', updateUserById);
// Endpoint para la eliminación de un usuario
router.delete('/:id', deleteUserById);

module.exports = router;