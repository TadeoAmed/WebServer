'user strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const propiedadSchema = Schema({  
//                                  direccion: String,
//                                  tipo: String, //casa o depto
//                                  piso: String,
//                                  mts_cuadrados: Number,
//                                  ambientes: Number,
//                                  banos: Number,
//                                  barrio: String,
//                                  precio: String,
//                                  garage: String,
//                                  balcon: String,
//                                  terraza: String, 
//                                  pileta: String
//                              }, { versionKey: false })

const propiedadSchema = Schema({  
    direccion: {type:String, trim: true, lowercase:true},// trim para que cadavez que se almacene un valor aca, sea limpiado autoamaticamente
    tipo:  {type:String, trim: true, lowercase:true}, //casa o depto
    piso: {type:String, trim: true, lowercase:true},//lowercase para que sea siempre guardado en minuscula
    mts_cuadrados: {type:String, trim: true, lowercase:true},
    ambientes: {type:String, trim: true, lowercase:true},
    banos: {type:String, trim: true, lowercase:true},
    barrio: {type:String, trim: true, lowercase:true},
    precio: {type:String, trim: true, lowercase:true},
    garage: {type:String, trim: true, lowercase:true},
                             }, { versionKey: false })



var collectionName='propiedades'
module.exports = mongoose.model(collectionName, propiedadSchema)


