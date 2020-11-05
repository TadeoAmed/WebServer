
var puerto = '8081'
var connect = require('connect')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json({limit:'2mb'}))
//app.use(bodyParser.urlencoded({limit:'2mb',extended:true}))
require('./propiedadesApi.js')(app)
var mongoose = require('mongoose')
var db = mongoose.connection

db.on('error',console.error.bind(console,'connection error:'))
db.on('open', function(){
    console.log('BD CONNECTED')
    app.listen(app.get('port'), function() {
        console.log('Servidor propiedadesApi iniciado.');
    });
})

var url = 'mongodb://127.0.0.1:27017/deptos'
mongoose.connect(url,{useNewUrlParser:true},function(err,response){ 
    if(err){
        return console.log(err);
    }
})

