var express = require('express'),
  app = express(),
  port = process.env.PORT || 80,
  mongoose = require('mongoose'),
  Cliente = require('./api/models/clienteModel'),
  Paciente = require('./api/models/pacienteModel'),
  Veterinario = require('./api/models/veterinarioModel'),
  RegistroMedico = require('./api/models/registroMedicoModel');
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;  
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


var clienteRoutes = require('./api/routes/clienteRoutes');
var pacienteRoutes = require('./api/routes/pacienteRoutes');
var veterinarioRoutes = require('./api/routes/veterinarioRoutes');
var registroMedicoRoutes = require('./api/routes/registroMedicoRoutes');
clienteRoutes(app);
pacienteRoutes(app);
veterinarioRoutes(app);
registroMedicoRoutes(app);

app.listen(port);


console.log('FidVet RESTful API server started on: ' + port);
