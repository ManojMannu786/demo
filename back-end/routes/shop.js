const express = require('express');

const routes = express.Router();

routes.get('/', (req,res,next)=>{
    res.send('<h1> Hello from Manoj </h1>');
})

module.exports = routes;