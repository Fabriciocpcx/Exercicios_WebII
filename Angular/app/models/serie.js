// /models/contato.js
var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        categoria: {
            type: String
        },

        valor: {
            type: String
        }

    });
    return mongoose.model('series', schema);
};

