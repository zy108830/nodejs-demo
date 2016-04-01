/**
 * 管道流的作用就是读取一个文件的内容,然后再将读取出来的内容写入另一个文件中
 * @type {exports|module.exports}
 */
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");