/**
 * Created by zqq on 16/2/24.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();

/**
 * 在添加事件的时候,addListener与on的作用是相同的
 */
var connectHandle1=function(){
    console.log('事件绑定1被触发');
};
var connectHandle2=function(){
    console.log('事件绑定2被触发');
};

eventEmitter.addListener('connection',connectHandle1);
eventEmitter.on('connection',connectHandle2);

/**
 * 获取事件数量
 * 创建事件发射器的时候用 new events.EventEmitter();
 * 获取事件监听器数量的时候用 events.EventEmitter.listenerCount();
 */

var eventListeners=events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'监听器正在监听事件');


/**
 * 事件触发
 */
eventEmitter.emit('connection');


/**
 * 事件移除
 */
eventEmitter.removeListener('connection',connectHandle1);
console.log('事件1被移除');

/**
 *事件再次触发
 */
eventEmitter.emit('connection');

/**
 * 再次获取事件监听的数量
 */
var eventListeners=events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'监听器正在监听事件');

console.log('事件程序处理完毕');