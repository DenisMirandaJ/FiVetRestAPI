module.exports = function(app) {
    var registroMedicoControlador = require('../controllers/registroMedicoController');
  
    app.route('/registroMedicos')
      .get(registroMedicoControlador.listaRegistrosMedicos)
      .post(registroMedicoControlador.crearRegistroMedico);
  
  
    app.route('/registroMedicos/:registroMedicoId')
      .get(registroMedicoControlador.buscarRegistrosMedicos)
      .delete(registroMedicoControlador.eliminarRegistroMedico);
};