const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    suburb: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const LocationSchema = mongoose.Schema({
    building: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    workArea: {
        type: String,
        required: true
    },
    address: {
        type: AddressSchema,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
})

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;