orders_and_customers_app.factory('OrdersFactory', function($http){
			var orders = [];
			var factory = {};
			factory.getOrders = function(callback){
				console.log("getting orders");
				$http.get('/orders').success(function(output){
					callback(output);
				})
			}
			factory.addOrders = function(info, callback){
				if (info.item.length > 4 && info.quantity != null && info.customer != null){
				console.log("in orders factory");
				$http.post('/orders', info).success(function(){
					callback();
				})
			 }
		   }
			factory.deleteOrders = function(order, callback){
				console.log("deleting order", order);
				$http.delete('/orders/'+ order._id).success(function(){
					callback();
				})
			}
			return factory;
});