/**
 * Created by zqq on 3/10/16.
 */
/**
 * 文件处理和子进程
 * child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的执行结果以回调函数参数的形式返回
 * @type {exports|module.exports}
 */
const fs = require('fs');
const child_process = require('child_process');
/**
 * 从输出的结果可以看出,进程并不是完全按照1,2,3的顺序来依次执行的
 * 已经起到了多进程异步执行的效果
 */
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node support.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });
    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}