var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Post = require(__dirname + '/../models/Post');

router.get('/new',function(req,res){
  res.render('cms')
})

router.get('',function(req,res){
  res.redirect('/api/new')
})

router.route('/')
.post(function(req, res) {
    var post = new Post();
    post.title = req.body.title;
    post.preview = req.body.preview;
    post.body = req.body.body;

    post.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Post created',
            title: req.body.title,
            preview: req.body.preview,
            body: req.body.body,
            date: post.date
        });
    })
})

.get(function(req, res) {
    Post.find(function(err, posts) {
        if (err)
            res.send(err);

        res.json(posts);
    });
})

module.exports = router
