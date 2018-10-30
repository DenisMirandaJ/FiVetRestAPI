'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = new Schema({
    nombre: {
      type: String
    },
    especie: String,
    raza: String,
    pelaje: String,
    cliente: {
      type: [String]
    },
    castrado: Boolean,
    chip: {
      type: String,
      default: "NO"
    },
    ultimaVisita: {
      type: Date
    },
    FechaPrimerIngreso: Date
});

module.exports = mongoose.model('paciente', PacienteSchema);