/**
 * Created by zqq on 3/8/16.
 */
/**
 * 如同require('http')等,我们也可以开发自己的NodeJS模块,并使用require方式进行加载
 * 一个NodeJS文件就是一个模块,require默认加载js格式的文件
 * require接受以下参数的传递:
 * (1)http,fs等原生模块
 * (2)相对路径和绝对路径的文件模块
 * @type {require|NodeRequire}
 */
var Hello=new require('./hello');
var hello=new Hello();
hello.sayName();