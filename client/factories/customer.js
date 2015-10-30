orders_and_customers_app.factory('CustomerFactory', function($http){
			var customers = [];
			var factory = {};
			factory.getCustomers = function(callback){
				$http.get('/customers').success(function(output){
					callback(output);
				})
			}
			factory.addCustomers = function(info, callback){
				if (info.name.length > 4){
				$http.post('/customers', info).success(function(){
					callback();
				})
			  }
		    }
			factory.deleteCustomers = function(customer, callback){
				console.log("deleting customer", customer);
				$http.delete('/customers/'+ customer._id).success(function(){
					callback();
				})
			}
			return factory;
});