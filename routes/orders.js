var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Order = require('../models/orders');
var Product = require('../models/products');

router.route('/')
  .get(function(req, res){
    
    Order.find()
      .populate('customer')
      .populate('items')
      .exec(function(err, orders){
      if(err){
        console.log(err)
      } else {
        res.json(orders)
      }
    })
  })
  .post(function(req, res){

    var order = new Order();
    order.customer = "56d5d2f51c0375472946539f";
    order.items = ["56dba3d56bb89af736cfff42", "56dba3e16bb89af736cfff43", "56dba3ec6bb89af736cfff44", "56dba3f36bb89af736cfff45"];
    order.total = 100;

    order.save(function(err, order){
      if(err){
        console.log(err)
      } else {
        res.json(order)
      }
    })
  });

router.route('/:order_id')
  .get(function(req, res){
    Order.findById(req.params.order_id, function(err, order){
      if(err){
        console.log(err)
      } else {
        res.json(order)
      }
    })
  })
  .delete(function(req, res){
    Order.remove({_id: req.params.order_id}, function(err){
      if(err){
        console.log(err)
      } else {
        res.json({message: 'order deleted'})
      }
    })
  })

module.exports = router;