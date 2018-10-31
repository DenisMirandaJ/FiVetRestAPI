'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroMedicoSchema = new Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  anamnesia : String,
  peso: number,
  temperatura: number,
  hidratacion: number,
  pulso: number,
  frecuenciaCardiaca: number,
  frecuenciaRespiratoria: number,
  mucosas: number,
  tiempoDeLlenadoCapilar: number,
  Ganglios: String,
  reflejoTusigeno: String,
  reflejoDeglutorio: String,
  palpitaciónAbdominal: String,
  palmopercusion: String, condicionCorporal: String,
  tonsillas: string,
  conciencia: String,
  vacunas : [String],
  comentarioVacunas: [String],
  desparacitaciones : [String],
  comentarioDesparacitaciones : [String]
});

module.exports = mongoose.model('registroMedico', RegistroMedicoSchema);