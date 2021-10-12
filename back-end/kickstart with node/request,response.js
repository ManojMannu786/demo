const http = require('http');

// const routes = require('./routes.js');

// console.log(routes.text);
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" title="product"><button type="submit">Add Product</button></form>');
})

app.post('/product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req,res,next)=>{
    res.send('<h1> Hello from Manoj </h1>')
})

app.listen(4000);
