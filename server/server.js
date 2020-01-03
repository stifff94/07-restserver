const express = require('express')
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
require('./config/config')
app.get('/usuario',  function(req,res){
    res.json("hola mundo");
})
app.post('/usuario',  function(req,res){
    let body = req.body
    if(body.nombre== undefined){
        res.status(400).json(
            {
                ok: false,
                mensaje: "nombre necesario"
            }
        )
    }
    else{
    res.json(
        {
            usuario: body
        }
    );}
})
app.put('/usuario:id',  function(req,res){
    let id= req.params.id
    res.json(
        {
            cedula: id

        }
    )
    res.json("hola mundo");
})
app.delete('/usuario',  function(req,res){
    res.json("hola mundo");
})
app.listen(process.env.PORT, ()=>{
    console.log("escuchando en el puerto", 3000)
});

