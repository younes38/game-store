const { AsyncLocalStorage } = require('async_hooks');
const { RSA_NO_PADDING } = require('constants');
const express = require('express');
const router = express.Router();
const Client = require('../models/client');

// get all the posts
router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.json({ messge: err });
    }

});

// add a client
router.post('/add_client', async (req, res) => {
    console.log("add a new client!!");
    console.log(req.body);
    const client = new Client({
        clientId: req.body.clientId,
        clientName: req.body.clientName,
        accountBalance: req.body.accountBalance
    })
    try {
        const savedClient = await client.save();
        res.json(savedClient);
    } catch (err) {
        res.json({ message: err });
    }
});

// get solde
router.get('/get_solde/:clientId', async (req, res) => {
    console.log(req.params);
    try {
        const client = await Client.findOne({"clientId": req.params.clientId});
        if (client === null) res.json({message: "client not found"});
        res.json({solde: client['accountBalance']});
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;