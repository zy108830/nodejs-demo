/**
 * 提供一系列的文件操作API
 */
const fs = require('fs')

fs.copyFile('/Users/xinchao/Desktop/aaaaaa.txt', '/Users/xinchao/Desktop/pppp.txt', (err) => {
    console.log(err)
});

// fs.createReadStream('/Users/xinchao/Desktop/aaaaaa.txt').pipe(fs.createWriteStream('/Users/xinchao/Desktop/bbb.txt'))

