var mongoose = require('mongoose'),
  Veterinario = mongoose.model('veterinario');

exports.listaVeterinarios = function(req, res) {
    Veterinario.find({}, function(err, veterinario) {
        if (err)
        {
          res.status(400);
          res.send(err);
          return;
        }
        res.json(veterinario);
    });
};

exports.buscarVeterinario = function(req, res) {
    Veterinario.findById(req.params.veterinarioId, function(err, veterinario) {
      if (err) {
        res.status(404);
        res.send(err);
        return;
      }
      console.log(req + "veterinario");     
      res.json(veterinario);
    });
  };

exports.crearVeterinario = function(req, res) {
    var nuevoVeterinario = new Veterinario(req.body);
    nuevoVeterinario.save(function(err, veterinario) {
      if (err)
      {
        res.status(400);
        res.send(err);
        return;
      }
      res.json(veterinario);
    });
  };
  
  exports.eliminarVeterinario = function(req, res) {
    Veterinario.remove({
      _id: req.params.VeterinarioId
    }, function(err, veterinario) {
      if (err){
        res.status(400);
        res.send(err);
        return;
      }
      res.json({ message: 'Veterinario eliminado correctamente' });
    });
  };

  exports.actualizarVeterinario = function(req, res) {
    Veterinario.findOneAndUpdate({_id: req.params.veterinarioId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };