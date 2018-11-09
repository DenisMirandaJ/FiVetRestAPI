var mongoose = require('mongoose'),
  Veterinario = mongoose.model('veterinario');

exports.listaVeterinarios = function(req, res) {
    Veterinario.find({}, function(err, veterinario) {
        if (err)
        {
            res.send(err);
            return;
        }
        res.json(veterinario);
    });
};

exports.buscarVeterinario = function(req, res) {
    Veterinario.findById(req.params.veterinarioId, function(err, veterinario) {
      if (err) {
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
        res.send(err);
        return;
      }
      res.json({ message: 'Veterinario eliminado correctamente' });
    });
  };