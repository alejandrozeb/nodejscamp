const http= require("http");

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.write("<html><body> Home page</body> </html>");
    res.end();
});

server.listen(4000);
console.log('runnig on 4000');