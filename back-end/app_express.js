const path = require('path')

const http = require('http');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();


const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({
    extended: false
}));

//filter all '/admin' request to adminRoutes
app.use('/admin', adminRoutes);
//filter all '/shop' request to adminRoutes
app.use('/shop', shopRoutes);



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000);
