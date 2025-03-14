const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    code: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
})

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;