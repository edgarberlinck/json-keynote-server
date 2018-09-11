require('dotenv').config()

const mongoose = require('mongoose');  
mongoose.connect(process.env.DB_CONNECTION); 
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongDB connection fail'))

const Keynote = require('../models/keynote.model');

exports.listKeynotes = (req, res) => {
    Keynote.find().exec( (err, list ) => res.send(list));   
}

exports.addKeynote = (req, res) => {
    let keynote = Keynote.create({...req.body});
    keynote
        .then(() => res.status(201).send())
        .catch(err => res.status(500).send())
}