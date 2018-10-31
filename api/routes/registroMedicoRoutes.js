module.exports = function(app) {
    var registroMedicoControlador = require('../controllers/registroMedicoController');
  
    app.route('/registroMedicos')
      .get(registroMedicoControlador.listarRegistrosMedicos)
      .post(registroMedicoControlador.crearRegistroMedico);
  
  
    app.route('/registroMedicos/:registroMedicoId')
      .get(registroMedicoControlador.buscarRegistroMedico)
      .delete(registroMedicoControlador.eliminarRegistroMedico);
};