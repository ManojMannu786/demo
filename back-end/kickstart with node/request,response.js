const http = require('http');
http.c
const server = http.createServer((req,res)=>{
    if(req.url == '/home'){
        res.write('<html><head></head><body><h1> Welcome home </h1></body></html>');
        res.end();
    }
    else if(req.url == '/about'){
        res.write('<html><head></head><body><h1> Welcome to About Us page </h1></body></html>');
        res.end();
    }
    else if(req.url == '/node'){
        res.write('<html><head></head><body><h1> Welcome to my Node Js project </h1></body></html>');
        res.end();
    }
    else {
        res.write('<html><head></head><body><h1> Welcome to my Node Js project default page </h1></body></html>');
        res.end();
    }
})

server.listen(4000);
