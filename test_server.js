var http = require('http'),
    port = 6001;

function handle(req, res){
    console.log('requete');
    res.end('<!doctype html><html><body><head></head><h1>Ouloulou</h1></body></html>');
}

var server = http.createServer(handle);

server.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port);
});