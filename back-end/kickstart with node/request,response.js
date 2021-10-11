const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<html>')
        res.write('<head><title> default page </title></head>')
        res.write('<body><form action ="/message" method = "POST"><input type="text" name="message"><button type="submit"> Send</button></body>')
        res.write('</html>')
        return res.end();
    }
    if(req.url == '/message' && req.method == 'POST'){
        const body =[];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
          });
          req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
          });
        // fs.writeFileSync('message.txt', 'Dummy Text');
        res.statusCode= 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.write('<html>')
        res.write('<head><title> message page </title></head>')
        res.write('<body><h1>This is message page</h1></body>')
        res.write('</html>')
        res.end();
})

server.listen(4000);
