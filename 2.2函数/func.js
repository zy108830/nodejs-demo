/**
 * Created by zqq on 3/8/16.
 */
/**
 * 一般函数
 * @param word
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}
execute(say, "Hello");

/**
 * 匿名函数的执行
 */
(function(arg){
    console.log(arg)
}('参数'));


