'user strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propiedadSchema = Schema({  
                                 direccion: String,
                                 tipo: String, //casa o depto
                                 piso: String,
                                 mts_cuadrados: Number,
                                 ambientes: Number,
                                 banos: Number,
                                 barrio: String,
                                 precio: String,
                                 garage: Boolean,
                                 balcon: Boolean,
                                 terraza: Boolean, 
                                 pileta: Boolean
                             }, { versionKey: false })

var collectionName='Propiedad'
module.exports = mongoose.model(collectionName, propiedadSchema)