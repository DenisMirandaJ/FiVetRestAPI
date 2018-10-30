'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteScheme = new Schema({
    nombre: {
      type: String,
      required: "Debe ingresar un nombre"
    },
    rut : {
      type: String,
      required: "Debe ingresar un rut"
    },
    email: {
      type: String
    },
    fechaIngreso: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('cliente', ClienteScheme);
