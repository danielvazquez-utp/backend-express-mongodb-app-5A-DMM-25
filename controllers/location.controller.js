const Location = require('../models/location.model');

// Función para recuperar toda la colección de _Locations
const getLocations = async(req, res) => {
    try {
        const Locations = await Location.find({});
        res.status(200).json(Locations);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un _Location usando su identificador
const getLocationsById = async(req, res) => {
    try {
        const { id } = req.params;
        const _Location = await Location.find({'_id': id});
        res.status(200).json(_Location);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un _Location usando su nickname y contraseña
const getLocationsByType = async(req, res) => {
    try {
        const type = req.body.type;
        const _Location = await Location.find({'type': type});
        res.status(200).json(_Location);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función crear un _Location
const createLocation = async(req, res) => {
    try {
        const _Location = await Location.create( req.body );
        res.status(200).json(_Location);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar actualizar los datos de un _Location usando su identificador
const updateLocationById = async(req, res) => {
    try {
        const { id } = req.params;
        const _Location = await Location.findByIdAndUpdate(id, req.body);
        if (!_Location)
            return res.status(400).json({ message: 'El _Location no existe' });
        const _LocationActualizado = await Location.find({ '_id':id });
        res.status(200).json(_LocationActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para eliminar un _Location usando su identificador
const deleteLocationById = async(req, res) => {
    try {
        const { id } = req.params;
        const _Location = await Location.find({'_id': id});
        if (!_Location)
            return res.status(400).json({ message: 'El _Location no existe' });
        const Eliminado = await Location.deleteOne({ '_id':id });
        res.status(200).json({ message: '_Location eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

module.exports = {
    getLocations,
    getLocationsById,
    createLocation,
    updateLocationById,
    deleteLocationById,
    getLocationsByType
}