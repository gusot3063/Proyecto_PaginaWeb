console.log('Peticion a Node');

const http = require('http');

const host = '0.0.0.0'

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Todo OK")
});

server.listen(port, host, () => {
    console.log ("Servidor encendido " + host + "/" + port)
});
