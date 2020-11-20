
var puerto = '8081'
var connect = require('connect')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json({limit:'2mb'}))
//app.use(bodyParser.urlencoded({limit:'2mb',extended:true}))
var mongoose = require('mongoose')
var db = mongoose.connection
var routes = require('./Routes');

app.set('port', process.env.PORT || 4000); //  defino una variable port. Nuestra aplicacion va a definir un puerto, tomará el puerto del sistema operativo con "process.env.PORT" y en caso de no existir pondrá el puerto 4000
app.use('/propiedadesApi',routes);
db.on('error',console.error.bind(console,'connection error:'))
db.on('open', function(){
    console.log('BD CONNECTED')
    app.listen(app.get('port'), function() {
        console.log(`Servidor propiedadesApi iniciado en el puerto ${app.get('port')}`); //  el ${app.get('port')} dentro del console.log nos va a indicar el puerto que se esté escuchando que haya tomado la variable port
    });
})

var url = 'mongodb://127.0.0.1:27017/propiedades-Api'
mongoose.connect(url,{useNewUrlParser:true},function(err,response){ 
    if(err){
        return console.log(err);
    }
})

