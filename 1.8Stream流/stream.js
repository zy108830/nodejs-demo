/**
 * Created by zqq on 16/2/24.
 */

/**
 * 创建可读流
 * 简言之,缓存是从内存中读取内容,而流是从文件中读取内容
 * @type {exports|module.exports}
 */
var fs=require('fs'),data='';
//实例化
var readerStream=fs.createReadStream('input.txt');
//设置编码
readerStream.setEncoding('utf8');
//处理事件,chunk参数是文件内容
readerStream.on('data',function(chunk){
    data+=chunk;
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(error){
    console.log(error.stack);
});
console.log('程序执行完毕');
