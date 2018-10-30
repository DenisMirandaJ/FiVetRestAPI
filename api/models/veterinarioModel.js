'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VeterinarioScheme = new Schema({
    nombre: {
        type: String,
        require: "Debe ingresar un nombre"
    },
    rut: {
        type: String,
        require: "Debe ingresar un rut"
    },
})

module.exports = mongoose.model('veterinario', VeterinarioScheme);