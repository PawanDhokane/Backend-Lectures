const http = require('http');
const fs = require('fs');

const server = http.createServer((req ,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});

    let filePath = __dirname + "/index.html";

    let htmlContent = fs.readFileSync(filePath);
    res.end(htmlContent);
});

const PORT = 3001;

server.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`);    
});