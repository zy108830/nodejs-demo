/**
 * Created by zqq on 3/8/16.
 */
var server=require('./server');
var router=require('./route');
server.start(router.route);