const path = require('path');

const express = require('express');

const routes = express.Router();

//checks for /admin/add-product => GET
routes.get('/add-product', (req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
})
//checks for /admin/add-product => POST
routes.post('/add-product', (req,res,next)=>{
    console.log(req.data);
    res.redirect('/shop');  //redirect to /shop
})

module.exports = routes;