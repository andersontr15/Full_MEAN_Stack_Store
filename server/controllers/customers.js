var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
      show: function(req, res) {
        console.log("Getting all customers in customers.js");
        Customer.find({}, function(err, results) {
           if(err) {
             console.log(err);
           } else {
             res.json(results);
           }
        })
      },
      add: function(req, res) {
        console.log("adding new customer in customers.js", req.body);
        var customer = new Customer({ name: req.body.name, created: Date.now()});

        customer.save(function(err){
          if(err){
            console.log(err)
          }
          else{
            res.json(true);
          }
        })

      },
      destroy: function(req, res){
        console.log('deleting customer in customers.js', req.params.id);

        Customer.remove({_id: req.params.id}, function(err){
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