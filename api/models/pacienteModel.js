'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = new Schema({
    nombre: {
      type: String,
      required : [true, 'El nombre del paciente es requerido.']
    },
    especie: String,
    raza: String,
    color: String,
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
    foto: Buffer
});

module.exports = mongoose.model('paciente', PacienteSchema);