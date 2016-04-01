/**
 * Created by zqq on 16/2/24.
 */

/**
 * 在没有自定义Error方法的时候,触发error事件会在控制台报错
 * @type {EventEmitter|exports|module.exports}
 */

    /*
var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.emit('error');
        */


/**
 * 可以手动设置错误
 * @type {EventEmitter|exports|module.exports}
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('error',function(){
    console.log('出现了某种错误...');
});
eventEmitter.emit('error');

//建议,一般在使用net,fs,http的时候,继承定义了error事件处理函数的event对象