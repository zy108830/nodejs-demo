/**
 * Created by zqq on 3/9/16.
 */
var http=require('http');
var request=http.request({
    host:'localhost',
    port:'1240',
    path:'/index.html'
},function(response){
    var body='';
    response.on('data',function(chunk){
        body+=chunk;
    });
    response.on('end',function(){
        console.log(body);
    });
});
request.end();