//config/express.js 
var express = require('express'),
    load = require('express-load');

module.exports = function () {
    var app = express();
    app.set('port', 3000);
    app.use(express.static('./public'));

    return app;
}