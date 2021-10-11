const http = require('http');
http.c
const server = http.createServer((req,res)=>{
    res.write('<html><head></head><body><h1>Welcome to my Node Js project</h1></body></html>');
    res.end();
})

server.listen(4000);