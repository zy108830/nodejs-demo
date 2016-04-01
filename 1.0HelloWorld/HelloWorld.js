/**
 * Created by zqq on 16/2/23.
 */

/**
 * NodeJS自带http,fs等模块;无需使用npm install来安装,当然使用npm ls也无法查看
 */
var http = require('http');
/**
 * request http请求信息
 * response http响应信息
 */
http.createServer(function (request, response) {
    //响应头信息,返回HTTP状态 200;
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //返回处理内容
    response.end('Hello World');
}).listen(1234);
console.log('成功创建了HTTP服务器');
