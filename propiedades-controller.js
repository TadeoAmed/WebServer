const Propiedad = require('./models/propiedad')

exports.add = function(req,res){
        const propiedad = new Propiedad();
        propiedad.direccion = req.body.direccion
        propiedad.tipo = req.body.tipo
        propiedad.piso = req.body.piso
        propiedad.mts_cuadrados = req.body.mts_cuadrados
        propiedad.ambientes = req.body.ambientes
        propiedad.banos = req.body.banos
        propiedad.barrio = req.body.barrio
        propiedad.precio = req.body.precio
        propiedad.garage = req.body.garage
        
        propiedad.save(function(err, propRegistered){
            if(err){
                res.status(500).send(`Error al crear propiedad: ${err}`)
                return 
            }
            res.status(200).send({propiedad: propRegistered}) })
    }

    

    exports.list = function(req, res){
    
        Propiedad.find()
        .then(doc =>{
            res.json(doc);
        })
        .catch(err =>{
            res.status(500).send(`Error al listar propiedades: ${err}`)
        })
    
};
    
exports.listOne = function(req, res){
        const id = req.params.id
        Propiedad.findById(id, (err,propiedad) => {
           if(err){
               res.status(500).send(`Error al obtener propiedad: ${err}`)
               return
           }
           res.status(200).send({propiedad: propiedad})

           })
    
};

exports.update = function(req, res){
   
    Propiedad.findById(req.params.id,function(err,propiedad){
        propiedad.direccion = req.body.direccion;
        propiedad.tipo = req.body.tipo;
        propiedad.piso = req.body.piso;
        propiedad.mts_cuadrados = req.body.mts_cuadrados;
        propiedad.ambientes = req.body.ambientes;
        propiedad.banos = req.body.banos;
        propiedad.barrio = req.body.barrio;
        propiedad.precio = req.body.precio;
        propiedad.garage = req.body.garage;
        
        
        propiedad.save(function(err) {
                      if(err) return res.status(500).send(err.message);
                  res.status(200).json(propiedad);
                   });        
    });        
};

exports.delete = function(req, res){
     
        const id = req.params.id
        
        Propiedad.findByIdAndDelete(id, (err,propencontrada) => {
           if(err){
               res.status(500).send(`Error al eliminar propiedad: ${err}`)
               return
           }
           res.status(200).send({propiedad: propencontrada})

           })
    
}


