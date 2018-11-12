var mongoose = require('mongoose'),
  Paciente = mongoose.model('paciente');

exports.listaPacientes = function(req, res) {
    Paciente.find({}, function(err, paciente) {
        if (err)
        {
          res.status(400);
          res.send(err);
          return;
        }
        res.json(paciente);
    });
};

exports.buscarPaciente = function(req, res) {
    Paciente.findById(req.params.pacienteId, function(err, paciente) {
      if (err) {
        res.status(404);
        res.send(err);
        return;
      }
      console.log(req + "paciente");     
      res.json(paciente);
    });
  };

exports.crearPaciente = function(req, res) {
    var nuevoPaciente = new Paciente(req.body);
    nuevoPaciente.save(function(err, paciente) {
      if (err)
      {
        res.status(400);
        res.send(err);
        return;
      }
      res.json(paciente);
    });
  };
  
  exports.eliminarPaciente = function(req, res) {
    Paciente.remove({
      _id: req.params.pacienteId
    }, function(err, paciente) {
      if (err){
        res.status(400);
        res.send(err);
        return;
      }
      res.json({ message: 'Paciente eliminado correctamente' });
    });
  };

  exports.actualizarPaciente = function(req, res) {
    Paciente.findOneAndUpdate({_id: req.params.pacienteId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };