/**
 * 初始化eventEmitter事件发射器对象
 * @type {EventEmitter|exports|module.exports}
 */
var events = require('events'),
    eventEmitter = new events.EventEmitter();

//定义函数
var connectHandler=function(){
    console.log('连接成功');
    eventEmitter.emit('data_received');
}

//绑定函数or匿名函数
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
    console.log('数据已经成功获取到');
})

//触发连接事件
eventEmitter.emit('connection');

console.log('事件处理完毕');