
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:false
}))

app.get('/login', (req,res,next)=>{
    res.send(
        '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>'
    )
})
app.post('/register', (req,res,next)=>{
    res.redirect('/');
})

app.post('/', (req,res,next)=>{
    res.send(
        `<form action="/message" method="POST"><input type="text" name="${localStorage.getItem('username')}"><button type="submit">Send</button></form>`
    )
})
app.post('/message', (req,res,next)=>{
    console.log(req.body);
})

app.listen(4000);