var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
      show: function(req, res) {
        console.log("Getting all products")
        Product.find({}, function(err, results) {
           if(err) {
             console.log(err);
           } else {
             res.json(results);
           }
        })
      },
      add: function(req, res) {
        console.log("adding product in products.js", req.body);
        var product = new Product({ product: req.body.product, img: req.body.img, created: Date.now(), quantity: req.body.quantity, description: req.body.description});
        product.save(function(err){
          if(err){
            console.log(err)
          }
          else{
            res.json(true);
          }
        })

      },
      destroy: function(req, res){
        console.log('deleting product in products.js', req.params.id);

       Product.remove({_id: req.params.id}, function(err){
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