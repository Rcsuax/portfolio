var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routers
app.use(require(__dirname + '/controllers/mainController.js'));

//EJSView
app.set('view engine', 'ejs');

 var dburl = returnDbString();

mongoose.connect(dburl);
var db = mongoose.connection;
var port = process.env.PORT || 3000;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongo connected:' + dburl);
    init();
});

function returnDbString(){
  return process.env.DBUser + ':' + process.env.DBPassword + '@ds111798.mlab.com:11798/port-api'
}

function init() {
    app.listen(port, function() {
        console.log('node listening on port 3000');
    })
}
