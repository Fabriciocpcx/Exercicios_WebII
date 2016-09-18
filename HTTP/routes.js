var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200,{
        "Content-Type": "text/html"
    });
    if(request.url == "/"){
        response.write("<h1>Pagina Principal</h1>");
    }else if(request.url == "/user"){
        response.write(" <h1>Nome: Fabricio Natanael</h1><br> <h1>Telefone:67 96361372</h1><br> <h1>Email: fabricionathancpcx@gmail.com</h1><br>");
    }else{
        response.write("<h1>Página não Encontrada</h1>");
    }
    response.end();
});
server.listen(3000, function(){
    console.log('Servidor Rodando!');
});