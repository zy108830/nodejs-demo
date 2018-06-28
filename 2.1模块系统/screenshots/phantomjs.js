// /path/to/phantomjs github.js即可
// 不知为啥：var link='http://github.com/';ReferenceError: Can't find variable: Promise
var page = require('webpage').create();
var link='http://www.siguoya.name/';
page.viewportSize = { width: 1024, height: 768 };
page.open(link, function () {
    setTimeout(function() {
        page.render('screenshots.png');
        phantom.exit();
    }, 5000);
});