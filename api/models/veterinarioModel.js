'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VeterinarioScheme = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del veterinario es requerido."]
    },
    rut: {
        type: String,
        required: [true, "El rut del veterinario es requerido."]
    },
    email : String
})

module.exports = mongoose.model('veterinario', VeterinarioScheme);