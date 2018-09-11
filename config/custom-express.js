var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors')

module.exports = function(){
    var app = express();
    var hidePoweredBy = require('hide-powered-by')
    app.use(hidePoweredBy({ setTo: 'PHP 4.2.0' }))
    app.use(cors())
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .into(app);

  return app;
}
