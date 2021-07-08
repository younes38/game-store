const mongoose = require('mongoose');

const rentedItemSchema = new mongoose.Schema({
    rentId: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    clientId: {
        type: String,
        required: true,
    },
    itemID: {
        type: String,
        required: true,
    },
    DueDate: {
        type: Date,
    }
})

module.exports = mongoose.model('RentedItem', rentedItemSchema);