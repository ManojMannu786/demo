const express = require('express');

const routes = express.Router();

//checks for /admin/add-product => GET
routes.get('/add-product', (req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"><input type="text" name="length"><button type="submit">Add Product</button></form>')
})
//checks for /admin/add-product => POST
routes.post('/add-product', (req,res,next)=>{
    console.log(req.data);
    res.redirect('/shop');  //redirect to /shop
})

module.exports = routes;