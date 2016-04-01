/**
 * Created by zqq on 16/2/24.
 */
/**
 * 创建长度为256个字节的Buffer实例,参数可以是字符串,数字与数组
 * @type {any|*}
 */
var buf=new Buffer(20);


/**
 * 写入缓存区
 * return 写入缓存区的内容的长度,实际上返回的是length属性
 */
var len=buf.write('HelloWorld');
console.log('缓存区的长度为'+len);


/**
 * 输出缓存区的内容,如果缓存区的内容不够定义的缓存区的大小,则多余的内容显示出来会有乱码
 */
//乱码
console.log('缓存区的内容为:'+buf.toString());
//非乱码
console.log('缓存区的内容为:'+buf.toString('utf8',0,10));


/**
 * 在输出内容的时候,对内容进行格式化
 */
console.log(buf.toJSON());


/**
 * 缓存区合并
 */
var buffer1 = new Buffer('Hello ');
var buffer2 = new Buffer('www.siguoya.name');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());


/**
 * 缓存区比较
 * @type {Buffer}
 */
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

/**
 * 缓存去拷贝,其实不仅有拷贝,还有粘贴呢
 * @type {Buffer}
 */
var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());


/**
 * 剪切缓冲区
 * @type {Buffer}
 */
var buffer1 = new Buffer('runoob');
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

/**
 * 获取缓存区内容的属性
 */
console.log(buffer2.length);