/**
 * 解压文件
 *
 */
var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('123.txt'));
console.log("文件解压完成。");

//不可以将压缩的脚本与解压的脚本写在同一个文件内,先后执行,不然会报错

