/*
Controller jogo:
Responsável por:

- manter uma instância do model
- pedir ao model para iniciar o jogo
- pedir ao model para lançar os dados
- pedir ao model para encerrar o jogo
*/

//var model = require('../models/jogo');
var jogoModel = undefined;

module.exports.iniciar = function (application, req, res){
	console.log('controller: iniciar');
	console.log('controller: cria instância de jogo');
	console.log("controller: dados: ", req.body);
	dados = req.body.dado;
	jogoModel = new application.app.models.jogo.Jogo(dados);
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');
}

module.exports.novoLancamento = function(application, req, res){
	console.log('controller: novoLancamento');
	if(jogoModel){
		console.log('controller: pede para o model fazer novoLancamento');
		var resultado  = jogoModel.novoLancamento();
		res.render('novoLancamento', resultado );
	}
}

module.exports.reiniciar = function(application, req, res){
	console.log('controller: reiniciar');
	if (jogoModel){
		console.log('controller: pede para o model criar um novo jogo');
		jogoModel.novoJogo();
		console.log('controller: atualizar a view');
		res.render('novoJogo');
	}
	else{
		console.log('controller: atualizar a view para a página principal');
		res.render('home');
	}
}

module.exports.encerrar = function(application, req, res){
	console.log('controller: encerrar');
	jogoModel = undefined;
	res.render('home');
}