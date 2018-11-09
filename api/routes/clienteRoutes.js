module.exports = function(app) {
    var clienteControlador = require('../controllers/clienteController');
  
    app.route('/clientes')
      .get(clienteControlador.listaClientes)
      .post(clienteControlador.crearCliente);
  
  
    app.route('/clientes/:clienteId')
      .get(clienteControlador.buscarCliente)
      .delete(clienteControlador.eliminarCliente)
      .put(clienteControlador.actualizarCliente);
};


// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var clienteController = require('../controllers/clienteController');

// router.get('/clientes', clienteController.listaClientes);
// router.get('/clientes/:id', clienteController.buscarCliente);
// router.post('/clientes', clienteController.crearCliente);
// router.delete('/clientes/:id', clienteController.eliminarCliente)
