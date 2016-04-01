/**
 * Created by zqq on 3/9/16.
 */
var http = require('http');
var fs = require('fs');
var url=require('url');
var querystring=require('querystring');
var util=require('util');
http.createServer(function (request, response) {
    //获取请求的文件名
    var pathname = url.parse(request.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            response.writeHead(404, {'Content-Type': 'text/png'});
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});
            // 响应文件内容
            response.write(data.toString());
        }
        response.end();
    });
}).listen(1240);