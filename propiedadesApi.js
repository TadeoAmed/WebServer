
module.exports = function(app){
const Propiedad = require('./models/propiedad')
    nuevaPropiedad = function(req,res){
        let propiedad = new Propiedad()
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
}