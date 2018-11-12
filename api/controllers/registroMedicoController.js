var mongoose = require('mongoose');
var RegistroMedico = mongoose.model('registroMedico');

exports.listaRegistrosMedicos = (req, res) => {
    RegistroMedico.find({},(err, registrosMedicos) => {
        if(err){
            res.status(400);
            res.send(err);
            return;
        }
        res.json(registrosMedicos);
    });
};

exports.buscarRegistrosMedicos = (req, res) => {
    console.log(req);
    RegistroMedico.find({pacienteId : req.params.pacienteId}, (err, registrosMedicos) => {
        if(err) {
            res.status(404);
            res.send(err);
            return;
        }
        res.json(registrosMedicos);
    });
};

exports.crearRegistroMedico = (req, res) => {
    var nuevoRegistroMedico = new RegistroMedico(req.body);
    nuevoRegistroMedico.save((err, registroMedico) => {
        /*if(err){
            console.log(err);
            if(err.errors.pacienteId) {
                let pacienteIdError = err.errors.pacienteId;
                if(pacienteIdError.name == "CastError"){
                    res.send("Error, el id del paciente debe ser numérico.");
                }
                else if(pacienteIdError.value == null){
                    res.send("Error, debe ingresar pacienteId.");
                } else {
                    res.send(pacienteIdError.message);
                }
            }
        }*/
        if(err){
            res.send(err);
            return;
        }
        res.json(registroMedico);
    });
};

exports.eliminarRegistroMedico = (req, res) => {
    RegistroMedico.remove({
        _id : req.params.registroMedicoId
    }, (err) => {
        if(err){
            res.status(400);
            res.send(err);
            return;
        };
        res.json({message : 'Registro eliminado correctamente.'});
    });
};

exports.actualizarRegistroMedico = (req, res) => {
    //Buscar por id y reemplazar.
};