var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
      show: function(req, res) {
        console.log("Getting all orders in orders.js");
        Order.find({}, function(err, results) {
           if(err) {
             console.log(err);
           } else {
             res.json(results);
           }
        })
      },
      add: function(req, res) {
        console.log("adding order in orders.js", req.body);
        var order = new Order({ item: req.body.item, customer: req.body.customer, quantity: req.body.quantity, created: Date.now()});
        order.save(function(err){
          console.log('in order.save')
          if(err){
            console.log(err)
          }
          else{
            console.log("order success");
            Product.findOne({product: req.body.item_.id}, function(err, product){
              console.log(product);
              product.quantity = product.quantity - req.body.quantity;
              product.save(function(err){if(err){console.log(err)}})
              console.log(product);
            });
            // Product.findOneAndUpdate({product: req.body.item}, {$inc: {quantity: 1}});
            // Product.findOneAndUpdate({product: req.body.item}, {$inc: {quantity: -req.body.quantity}})
            res.json(true);
          }
        })
      },
      destroy: function(req, res){
        console.log('deleting order in orders.js', req.params.id);

        Order.remove({_id: req.params.id}, function(err){
          if(err){
            console.log(err);
          }
          else{
            res.json(true);
          }
        })
      }
  }
})();