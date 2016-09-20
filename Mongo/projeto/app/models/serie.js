// /models/contato.js
var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        valor: {
            type: String
        }
    });
    return mongoose.model('series', schema);
};