const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
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
        type: Number,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
})

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;