
const express = require ('express');
const bodyParser = require('body-parser');
const propiedad = require('./models/propiedad');
const app = express();
module.exports = function(app){
const Propiedad = require('./models/propiedad')

    // app.post('/propiedadesApi/propiedades', nuevaPropiedad);

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
        Propiedad.findById(id, (err,id) => {
           if(err){
               res.status(500).send(`Error al obtener propiedad: ${err}`)
               return
           }
           res.status(200).send({propiedad: id})

           })
    });

// // get con query string

// app.get('/propiedadesApi/propiedades/', (req,res) => {
//     const propbusc = req.query
//      console.log(req.query);
//     Propiedad.find(propbusc, function(err,doc){
//         if(err){
//             res.status(500).send(`Error al actualizar propiedad: ${err}`)
//             return
//         }
//         res.status(200).send({propiedad: propbusc});
//     });
 
//  })


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


