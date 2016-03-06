var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Product = require('../models/products');

router.route('/')
  .get(function(req, res){
    
    Product.find(function(err, products){
      if(err){
        console.log(err)
      } else {
        res.json(products)
      }
    })
  })
  .post(function(req, res){

    var product = new Product();
    product.name = req.body.name;
    product.img = req.body.img;
    product.price = req.body.price;
    product.save(function(err, product){
      if(err){
        console.log(err)
      } else {
        res.json(product)
      }
    })
  });

router.route('/:product_id')
  .get(function(req, res){
    Product.findById(req.params.product_id, function(err, product){
      if(err){
        console.log(err)
      } else {
        res.json(product)
      }
    })
  })
  .delete(function(req, res){
    Product.remove({_id: req.params.post_id}, function(err){
      if(err){
        console.log(err)
      } else {
        res.json({message: 'product deleted'})
      }
    })
  })

module.exports = router;