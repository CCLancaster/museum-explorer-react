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
    let newPiece = {
        name: req.body.pname,
        image: req.body.pimage,
        museum: req.body.museum,
        creator: {
            name: req.body.cname,
            image: req.body.cimage,
            birthyear: req.body.birthyear,
            deathyear: req.body.deathyear
        }
    }

    Object.keys(newPiece).forEach((key) => (newPiece[key] == '') && delete newPiece[key]);
    Object.keys(newPiece.creator).forEach((key) => (newPiece.creator[key] == '') && delete newPiece.creator[key])


    db.Piece.create(newPiece)
    .then(piece => res.send(piece))
    .catch(err=>res.send('Error in creating a piece', err));
})


module.exports = router;