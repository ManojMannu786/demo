const express = require('express');

const routes = express.Router();

routes.get('/add-product', (req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="text" name="length"><button type="submit">Add Product</button></form>')
})
routes.post('/product', (req,res,next)=>{
    console.log(req.data);
    res.redirect('/');
})

module.exports = routes;