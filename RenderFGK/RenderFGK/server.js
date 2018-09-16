//Modulo principar para servir componentes(css/js)
var express = require('express');
var app = express();
//servir html
var fs = require('fs');
//servir static
app.use('/css', express.static('./public/css'));
app.use('/js', express.static('./public/js'));
//response
app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var respuesta = fs.createReadStream(__dirname + '/views/index.html', 'utf-8');
    respuesta.pipe(res);
});

app.listen(1337, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 1337!');
});
