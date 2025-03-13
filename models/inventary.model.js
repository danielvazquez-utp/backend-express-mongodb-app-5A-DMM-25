const mongoose = require('mongoose');
const InventarySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required:true
    },
    endDate: {
        type: Date,
        required:true
    },
    userInCharge:{
        type: String,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
})

const Inventary = mongoose.model('Inventary', InventarySchema);
module.exports = Inventary;