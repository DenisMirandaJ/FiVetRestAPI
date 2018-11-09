'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteScheme = new Schema({
    nombre: {
      type: String,
      required: [true, "Debe ingresar un nombre"]
    },
    rut : {
      type: String,
      required: [true, "Debe ingresar un rut"]
    },
    email: {
      type: String
    },
    telefono : String,
    direccion: String
});

module.exports = mongoose.model('cliente', ClienteScheme);
