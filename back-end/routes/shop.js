const express = require('express');

const routes = express.Router();

//checks for /shop/ =>get 
routes.get('/', (req,res,next)=>{
    res.send('<h1> Hello from Manoj </h1>');
})

module.exports = routes;