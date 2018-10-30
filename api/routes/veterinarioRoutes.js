module.exports = function(app) {
    var veterinarioControlador = require('../controllers/veterinarioController');
  
    app.route('/veterinarios')
      .get(veterinarioControlador.listaVeterinarios)
      .post(veterinarioControlador.crearVeterinario);
  
  
    app.route('/veterinarios/:veterinarioId')
      .get(veterinarioControlador.buscarVeterinario)
      .delete(veterinarioControlador.eliminarVeterinario);
};