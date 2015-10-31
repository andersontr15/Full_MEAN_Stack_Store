orders_and_customers_app.factory('ProductsFactory', function($http){
			var products = [];
			var factory = {};
			factory.getProducts = function(callback){
				$http.get('/products').success(function(output){
					callback(output);
				})
			}
			factory.addProducts = function(info, callback){
				console.log("adding products in products factory");
				console.log(products);
							$http.post('/products', info).success(function()
						{
						callback();
					})
				}
			 }
			factory.deleteProducts = function(product, callback){
				$http.delete('/products/'+ product._id).success(function(){
					callback();
				})
			}
			return factory;
});