/**
 * Created by zqq on 3/9/16.
 */

/**
 * 全局对象
 */

//变量
console.log(__filename);
console.log(__dirname);

//使用console.time(标记)来测试程序运行时间
console.time('测试运行时间');
    //定时器
    var timeout=setTimeout(function(){
        console.log('哈哈哈哈哈');
    },100);
    clearTimeout(timeout);
console.timeEnd('测试运行时间');

//定时器
/*setInterval(function(){
    console.log('Hello World');
},100);*/


//Process
process.on('exit',function(code){
    setTimeout(function(){
        console.log('该行代码永远不会输出');
    },0);
    console.log('退出码为'+code);
});

//输出到终端
process.stdout.write('Process Hello World');
//获取node命令的路径以及执行node时候的参数
process.argv.forEach(function(value,index,array){
    console.log(index+'======'+value);
});
//获取node命令的路径
console.log(process.execPath);
//平台信息
console.log(process.platform);//darwin
//输出当前目录
console.log('当前目录:'+process.cwd());
//当前版本
console.log('当前版本:'+process.version);
//内存使用情况
console.log(process.memoryUsage());