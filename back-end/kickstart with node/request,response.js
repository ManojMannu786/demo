const http = require('http');

// const routes = require('./routes.js');

// console.log(routes.text);
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('in first middleware');
    next();
})

app.use((req,res,next)=>{
    console.log('inside 2nd middleware');
    res.send('{ key1: value }');
})

app.listen(4000);
