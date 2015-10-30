orders_and_customers_app.factory('ReviewsFactory', function($http){
			var reviews = [];
			var factory = {};
			factory.getReviews = function(callback){
				$http.get('/reviews').success(function(output){
					callback(output);
				})
			}
			factory.addReviews = function(info, callback){
				if(info.review.length > 10 && info.customer != null && info.product != null){
					$http.post('/reviews', info).success(function(){
					callback();
				})
			   }
			 }
			factory.deleteReviews = function(review, callback){
				$http.delete('/reviews/'+ review._id).success(function(){
					callback();
				})
			}
			return factory;
});