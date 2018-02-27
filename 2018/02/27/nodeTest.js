//引入http模块
var http = require('http');

//使用http模块创建httpserver
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.write('hahahaha');
    response.end();
}).listen(8000,'127.0.0.1');
