var express = require('express'),
  app = express(),
  port = process.env.PORT || 80,
  mongoose = require('mongoose'),
  Cliente = require('./api/models/clienteModel'),
  Paciente = require('./api/models/pacienteModel'),
  Veterinario = require('./api/models/veterinarioModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;  
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var clienteRoutes = require('./api/routes/clienteRoutes');
var pacienteRoutes = require('./api/routes/pacienteRoutes');
var veterinarioRoutes = require('./api/routes/veterinarioRoutes');
clienteRoutes(app);
pacienteRoutes(app);
veterinarioRoutes(app);

app.listen(port);


console.log('FidVet RESTful API server started on: ' + port);
