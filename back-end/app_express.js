const http = require('http');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(adminRoutes);
app.use(shopRoutes);

//handeling page not found request
app.use((req,res,next)=>{
    res.status(404).send('<h1>:-(</h1><h3>"Page Not Found" : Manoj</h3>')  //res.status(404) sends respnse code of 404
})

app.listen(4000);
