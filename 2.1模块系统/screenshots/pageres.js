

const Pageres = require('pageres');
const pageres = new Pageres({delay: 2})
    .src('www.siguoya.name', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
    .src('www.siguoya.name', ['1280x1024', '1920x1080'])
    .dest(__dirname)
    .run()
    .then(() => console.log('done'));