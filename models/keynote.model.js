var mongoose = require('mongoose');  

const Schema = mongoose.Schema;
let KeynoteSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    author: { type: String, required: true},
    thanksMessage: { type: String },
    about: { type: Array, required: true },
    contacts: { type: Object, required: true },
    slides: { type: Object, required: true }
})

module.exports = mongoose.model('Keynote', KeynoteSchema);