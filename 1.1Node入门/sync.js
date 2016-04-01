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
    /**
     * 同步处理
     * @type {any}
     *
     *
    var fs=require('fs');
    console.log(fs.readFileSync('input.txt').toString());
    console.log('读取文件结束');
     /


    /**
     * 异步处理
     * 在 Node 应用程序中,执行异步操作的函数将回调函数作为最后一个参数
     * 回调函数接收错误对象作为第一个参数
     * 谨记!
     */
    var fs=require('fs');
    fs.readFile('input.txt',function(error,data){
        if(error){
            console.log(error.stack);
            return;
        }
        console.log(data.toString());
    });
    console.log('读取文件结束');

    //响应头信息,返回HTTP状态 200;
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //返回处理内容
    response.end('成功处理请求');

}).listen(1234);
console.log('成功创建了HTTP服务器');
