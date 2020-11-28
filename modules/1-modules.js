const http= require("http");
const log = require("./module/my-log");
const server = http.createServer((req,res) => {

    if(req.url === "/"){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("<html><body> Home page</body> </html>");
        res.end();
    }else if(req.url === "/exit"){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("<html><body> Bye page</body> </html>");
        res.end();
    }else if(req.url === "/info"){
        var result=log.info(req.url);
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(result);
        res.end();
    }else if(req.url === "/error"){
        var result2=log.error(req.url);
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(result2);
        res.end();
    }else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.write("<html><body> Not Found </body> </html>");
        res.end();
    } 

    
});

server.listen(4000);
console.log('runnig on 4000');