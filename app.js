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

//Model
var dburl = "127.0.0.1:27017/post";
 // var dburl = "root:passroot@ds111798.mlab.com:11798/port-api" ;

mongoose.connect(dburl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongo connected:' + dburl);
    init();
});

function init() {
    app.listen(3000, function() {
        console.log('node listening on port 3000');
    })
}
