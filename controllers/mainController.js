var express = require('express')
var router = express.Router()

router.use('/home', require('./homeController'));

router.use('/api', require('./postController'));

router.use('/static',express.static(__dirname + '/../views/assets/'))

router.get('/display',function(req,res,next){
    res.render('display')
});

router.get('/favicon.ico', function(req, res) {
    res.send(200);
});

router.get('/', function(req, res, next) {
    res.redirect('/home');
});

router.use(function(req, res, next) {
    res.json({
        status: 404,
        url: req.url
    });
});

module.exports = router
