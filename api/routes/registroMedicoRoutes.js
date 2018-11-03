module.exports = function(app) {
    var registroMedicoControlador = require('../controllers/registroMedicoController');
  
    app.route('/registrosMedicos')
      .get(registroMedicoControlador.listaRegistrosMedicos)
      .post(registroMedicoControlador.crearRegistroMedico);
  
    app.route('/registrosMedicos/:pacienteId')
      .get(registroMedicoControlador.buscarRegistrosMedicos);

    app.route('registrosMedicos/:registroMedicoId')
    .delete(registroMedicoControlador.eliminarRegistroMedico);
};