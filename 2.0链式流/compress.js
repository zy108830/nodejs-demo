/**
 * Created by zqq on 16/2/24.
 */

/**
 * 链式流作用在管道流的基础上,用于对文件进行压缩和解压缩
 * @type {exports|module.exports}
 */

/**
 * 压缩文件
 * 压缩 input.txt 文件为 input.txt.gz
 * @type {exports|module.exports}
 */

var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完成。");




