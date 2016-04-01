/**
 * Created by zqq on 3/8/16.
 */
function Hello(){
    var name='默认为zqq';
    this.setName=function(nameArg){
        name=nameArg;
    }
    this.sayName=function(nameArg){
        console.log('My name is '+name);
    }
}
/**
 * 这个模块导出了一个Hello类
 * @type {Hello}
 */
module.exports=Hello;