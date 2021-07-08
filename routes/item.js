const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// 0: game
// 1: film


// get all the posts
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ messge: err });
    }
});

// add an item
router.post('/add_item', async (req, res) => {
    console.log("add a new item!!");
    console.log(req.body);
    const item = new Item({
        itemId: req.body.itemId,
        title: req.body.title,
        rentalPrice: req.body.rentalPrice,
        type: req.body.type,
        additional: req.body.additional
    })
    try {
        const savedItem = await item.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

// get film by actor
router.get('/get_film_by_actor/:actor', async (req, res) => {
    console.log(req.params);
    try {
        const items = await Item.find({"additional": req.params.actor, "type": 1});
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;