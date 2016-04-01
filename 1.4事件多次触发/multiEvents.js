/**
 * Created by zqq on 16/2/24.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
})

eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
})

/**
 * 同时触发同一事件绑定的多个函数
 */
eventEmitter.emit('someEvent','参数1','参数2');

