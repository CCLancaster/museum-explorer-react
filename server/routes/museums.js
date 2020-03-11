const express = require('express');
const router = express.Router()
const db = require('../models/index');

router.get('/', (req, res) => {
    db.Museum.find()
    .then(museums => {
        res.send(museums);
    }).catch(err => res.send({ message: 'Error in getting all museaums', err}));
})

router.get('/:id', (req, res) => {
    db.Museum.findById(req.params.id)
    .then(museum=>res.send(museum))
    .catch(err=>res.send({ message: 'Error in getting one  museum', err}));
})
module.exports = router;