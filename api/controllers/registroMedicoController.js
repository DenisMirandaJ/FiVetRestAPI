var mongoose = require('mongoose');
var RegistroMedico = mongoose.model('registroMedico');

exports.listaRegistrosMedicos = (req, res) => {
    RegistroMedico.find({},(err, registrosMedicos) => {
        if(err){
            res.send(err);
        }
        res.json(registrosMedicos);
    });
};

exports.buscarRegistrosMedicos = (req, res) => {
    RegistroMedico.find({pacienteId : req.params.pacienteId}, (err, registrosMedicos) => {
        if(err) {
            res.send(err);
        }
        res.json(registrosMedicos);
    });
};

exports.crearRegistroMedico = (req, res) => {
    var nuevoRegistroMedico = new RegistroMedico(req.body);
    nuevoRegistroMedico.save((err, registroMedico) => {
        if(err) {
            res.send(err);
        }
        res.json(registroMedico);
    });
};

exports.eliminarRegistroMedico = (req, res) => {
    RegistroMedico.remove({
        _id : req.params.registroMedicoId
    }, (err) => {
        if(err){
            res.send(err);
        };
        res.json({message : 'Registro eliminado correctamente.'});
    });
};