module.exports = function(app) {
    var pacienteControlador = require('../controllers/pacienteController');
  
    app.route('/pacientes')
      .get(pacienteControlador.listaPacientes)
      .post(pacienteControlador.crearPaciente);
  
  
    app.route('/pacientes/:pacienteId')
      .get(pacienteControlador.buscarPaciente)
      .delete(pacienteControlador.eliminarPaciente)
      .put(pacienteControlador.actualizarPaciente);
};