/**
 * Created by zqq on 3/8/16.
 */
/**
 * 使用url模块获取请求的路径
 * 使用querystring模块来获取请求的参数
 */
function start(router){
    var http=require('http');
    var url=require('url');
    http.createServer(function (request, response) {
        //响应头信息,返回HTTP状态 200;
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        router(url.parse(request.url).pathname);
        //返回处理内容
        response.end('Hello World');
    }).listen(1234);
}
/**
 * 输出一个start方法
 * @type {router}
 */
exports.start=start;


