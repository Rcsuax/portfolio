var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var Post = require(__dirname + '/../models/Post')

router.get('/',function(req,res){
  Post.find(function(err, posts) {
    if(err){
      res.send(err)
    }
    var colorPointer = 0;
    var colorArray = ['#607D8B','#FF5722','#795548','#009688','#673AB7','#2196F3'];
    posts.forEach(function(post){
      post.color = colorArray[colorPointer];
      colorPointer++;
      if(colorPointer >= colorArray.length) {
        colorPointer = 0;
      }
    })
    res.render('index',{postlist: posts});
  });
});

module.exports = router
