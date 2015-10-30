var mongoose = require('mongoose');
var Review = mongoose.model('Review');

module.exports = (function() {
  return {
      show: function(req, res) {
        console.log("Retrieving all reviews");
        Review.find({}, function(err, results) {
           if(err) {
             console.log(err);
           } else {
             res.json(results);
           }
        })
      },
      add: function(req, res) {
        console.log("adding review in reviews.js", req.body);
        var review = new Review({ product: req.body.product, review: req.body.review, created: Date.now(), customer: req.body.customer, img: req.body.img});
        review.save(function(err){
          if(err){
            console.log(err)
          }
          else{
            res.json(true);
          }
        })

      },
      destroy: function(req, res){
        console.log('deleting reviewing in reviews.js', req.params.id);

       Review.remove({_id: req.params.id}, function(err){
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