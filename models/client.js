const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientId: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    clientName: {
        type: String,
        required: true,
        unique: true
    },
    accountBalance: {
        type: Number,
        default: 0,
        required: true
    }
})

module.exports = mongoose.model('Client', clientSchema);