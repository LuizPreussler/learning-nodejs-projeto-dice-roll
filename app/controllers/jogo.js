/*
Controller jogo:
Responsável por:

- manter uma instância do model
- pedir ao model para iniciar o jogo
- pedir ao model para lançar os dados
- pedir ao model para encerrar o jogo
*/

var model = require('../models/jogo');
var jogoModel = undefined;

module.exports.iniciar = function (application, req, res){
	console.log('controller: iniciar');
	console.log('controller: cria instância de jogo');
	jogoModel = new model.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');
}