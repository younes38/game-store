const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    title: {
        type: String,
        required: true,
    },
    rentalPrice: {
        type: Number,
        default: 0,
        required: true
    },
    type: {
        type: Number,
        default: 0,
        required: true
    },
    additional: {
        type: String,
    },
})

module.exports = mongoose.model('Item', itemSchema);