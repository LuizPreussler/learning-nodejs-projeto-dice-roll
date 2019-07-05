var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

/* o bodyParser facilita a extração de informações de requisições http, subsequentes
ao uso de formulários */
app.use(bodyParser.urlencoded({extended: true}))

consign()
	.include('./app/routes')
	.include('./app/controllers')
	.include('./app/models')
	.into(app);

module.exports = app;
