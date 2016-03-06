var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var faker = require('faker');

var User = require('../models/user');

var setUpPeople = function(){
  var count = 0;
    User.find(function(err, people){
      if(err){
        return next(err);
      } else {
        if(people.length < 50){
          console.log("CREATING PEOPLE")
          for (var i = 0; i < 50; i++) {
              var person = new User();
              person.local.email = faker.internet.email();
              person.local.password = faker.internet.password();
              person.local.username = faker.internet.userName();
              person.local.role = "customer";
              person.save(function(err, person){
                if(err){
                  console.log(err)
                } else {
                  console.log(person)
                }
              })
          };
        }
      }
    })
};

setUpPeople();

router.route('/')
  .get(function(req, res){
    
    User.find({'local.role': 'customer'},function(err, users){
      if(err){
        console.log(err)
      } else {
        res.json(users)
      }
    })
  })

module.exports = router;