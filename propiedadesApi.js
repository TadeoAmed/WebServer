
const express = require ('express');
const bodyParser = require('body-parser');
const propiedad = require('./models/propiedad');
const app = express();
module.exports = function(app){
const Propiedad = require('./models/propiedad')
    nuevaPropiedad = function(req,res){
        const propiedad = new Propiedad()
        propiedad.direccion = req.body.direccion
        propiedad.tipo = req.body.tipo
        propiedad.piso = req.body.piso
        propiedad.mst_cuadrados = req.body.mst_cuadrados
        propiedad.ambiente = req.body.ambiente
        propiedad.banos = req.body.banos
        propiedad.barrio = req.body.barrio
        propiedad.garage = req.body.garage
        propiedad.balcon = req.body.balcon
        propiedad.terraza = req.body.terraza
        propiedad.pileta = req.body.pileta
        propiedad.save(function(err, propRegistered){
            if(err){
                res.status(500).send(`Error al crear propiedad: ${err}`)
                return
            }
            res.status(200).send({propiedad: propRegistered}) })
    }
    app.post('/propiedadesApi/propiedades', nuevaPropiedad);

    app.get('/propiedadesApi/propiedades', (req, res) =>{
        Propiedad.find()
        .then(doc =>{
            res.json(doc);
        })
        .catch(err =>{
            console.log('error al consultar');
        })
    });
    
    app.get('/propiedadesApi/propiedades/:id', (req, res) => {
        const id = req.params.id
        Propiedad.findById(id, (err,propencontrada) => {
           if(err){
               res.status(500).send(`Error al actualizar propiedad: ${err}`)
               return
           }
           res.status(200).send({propiedad: propencontrada})

           })
    });
    app.put('propiedadesApi/propiedades/:id', (req, res) => {
         const id = req.params.id
         let update = req.body

         Propiedad.findByIdAndUpdate({_id:id}, update, { useFindAndModify: false }, (err, propiedadupdt) => {
            if(err){
                res.status(500).send(`Error al actualizar propiedad: ${err}`)
                return
            }   
            res.status(200).send({ propiedad: propiedadupdt })
            
         })

     });

     app.delete('/propiedadesApi/propiedades/:id', (req, res) => {
        const id = req.params.id
        
        propiedad.findByIdAndDelete(id, (err,propencontrada) => {
           if(err){
               res.status(500).send(`Error al actualizar propiedad: ${err}`)
               return
           }
           res.status(200).send({propiedad: propencontrada})

           })
    });
}


