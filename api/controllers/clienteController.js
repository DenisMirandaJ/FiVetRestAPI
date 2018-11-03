var mongoose = require('mongoose'),
  Cliente = mongoose.model('cliente');

exports.listaClientes = function(req, res) {
    Cliente.find({}, function(err, cliente) {
        if (err)
            res.send(err);
        res.json(cliente);
    });
};

exports.buscarCliente = function(req, res) {
    Cliente.findById(req.params.clienteId, function(err, cliente) {
      if (err) {
        res.send(err);
      }
      console.log(req + "cliente");     
      res.json(cliente);
    });
  };

exports.crearCliente = function(req, res) {
    var nuevoCliente = new Cliente(req.body);
    nuevoCliente.save(function(err, cliente) {
      if (err)
        res.send(err);
      res.json(cliente);
    });
  };
  
  exports.eliminarCliente = function(req, res) {
    Cliente.remove({
      _id: req.params.clienteId
    }, function(err, cliente) {
      if (err)
        res.send(err);
      res.json({ message: 'Cliente eliminado correctamente' });
    });
  };

  exports.actualizarCliente = (req, res) => {
    //buscar por id y reemplazar
  }