/**
 * Created by zqq on 3/9/16.
 */

/**
 * 获取GET请求的信息
 */
var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
    //响应头信息,返回HTTP状态 200;
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    console.log(url.parse(request.url));
    //返回处理内容
    response.end('请求结束');
}).listen(1234);
