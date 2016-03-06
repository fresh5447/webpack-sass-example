var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wanets');
var productRoutes = require('./routes/products');
var orderRoutes = require('./routes/orders');
var customerRoutes = require('./routes/customers');
var User = require('./models/user');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) {
          delete require.cache[id];
        }
      });
    });
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  console.log("SERVER PINGED")
  next();
});

app.use(express.static('public'));
app.use('/static', express.static('static'));

app.use(session({
  secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
  cookie: {
    maxAge: 60000
  }
}));
app.use(flash());

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('index')
});

app.get('/api/user', function(req, res){
  if(req.user){
    User.findById(req.user._id, function(err, user){
      if(err){
        console.log(err)
      } else {
        res.json(user)
      }
    })
  } else {
  res.json({message: "no user"});    
  }
})

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/customers', customerRoutes);

app.listen(port, function(req, res){
  console.log("server running on port: " + port)
});