const Item = require('../models/item.model');

// Función para recuperar toda la colección de _Items
const getItems = async(req, res) => {
    try {
        const Items = await Item.find({});
        res.status(200).json(Items);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un _Item usando su identificador
const getItemsById = async(req, res) => {
    try {
        const { id } = req.params;
        const _Item = await Item.find({'_id': id});
        res.status(200).json(_Item);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un _Item usando su nickname y contraseña
const getItemsByType = async(req, res) => {
    try {
        const type = req.body.type;
        const _Item = await Item.find({'type': type});
        res.status(200).json(_Item);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función crear un _Item
const createItem = async(req, res) => {
    try {
        const _Item = await Item.create( req.body );
        res.status(200).json(_Item);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar actualizar los datos de un _Item usando su identificador
const updateItemById = async(req, res) => {
    try {
        const { id } = req.params;
        const _Item = await Item.findByIdAndUpdate(id, req.body);
        if (!_Item)
            return res.status(400).json({ message: 'El _Item no existe' });
        const _ItemActualizado = await Item.find({ '_id':id });
        res.status(200).json(_ItemActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para eliminar un _Item usando su identificador
const deleteItemById = async(req, res) => {
    try {
        const { id } = req.params;
        const _Item = await Item.find({'_id': id});
        if (!_Item)
            return res.status(400).json({ message: 'El _Item no existe' });
        const Eliminado = await Item.deleteOne({ '_id':id });
        res.status(200).json({ message: '_Item eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

module.exports = {
    getItems,
    getItemsById,
    createItem,
    updateItemById,
    deleteItemById,
    getItemsByType
}