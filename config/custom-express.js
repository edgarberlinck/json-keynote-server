var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();
    var hidePoweredBy = require('hide-powered-by')
    app.use(hidePoweredBy({ setTo: 'PHP 4.2.0' }))

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    consign()
        .include('controllers')
        .into(app);

  return app;
}
