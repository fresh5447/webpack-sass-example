var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ig = require('instagram-node').instagram();

var redirect_uri = 'http://localhost3000/handleauth';

authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.
ig.use({ access_token: '887ecfd45fcc48cdb0a98bb907398408' });
ig.use({ client_id: 'ca6419c1d20349a9b7424fe211471838',
         client_secret: 'acd3d7f0ff2c4f6abfb5687e2b923bfa' });

router.route('/')
  .get(function(req, res){

  })

module.exports = router;



