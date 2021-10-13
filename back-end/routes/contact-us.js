const path = require('path')

const rootFile = require('../util/path.js')

const express = require('express');

const routes = express.Router();

routes.post('/contact-us/success', (req,res,next)=>{
    res.sendFile(path.join(__dirname, '..' ,'views', 'success.html'));
})
routes.get('/contact-us', (req,res,next)=>{
    res.sendFile(path.join(rootFile, 'views', 'contact-us.html'));
})

module.exports = routes;