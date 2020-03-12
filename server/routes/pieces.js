const express = require('express');
const router = express.Router()
const db = require('../models/index');

router.get('/', (req, res) => {
    db.Piece.find()
    .then(pieces => {
        res.send(pieces);
    }).catch(err => res.send({ message: 'Error in getting all pieces', err}));
})

router.get('/:id', (req, res) => {
    db.Piece.findById(req.params.id)
    .then(piece=>res.send(piece))
    .catch(err=>res.send({ message: 'Error in getting one piece', err}));
})

router.post('/pieces', (req, res) => {
    Piece.create(req.body)
    .then(pieces => {
        res.redirect(`/pieces/${pieces.id}`);
    }).catch(err=>res.send(err));
})


module.exports = router;