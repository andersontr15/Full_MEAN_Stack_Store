var orders_and_customers_app = angular.module('orders_and_customers_app',['ngRoute']);
/// Customers Controller ///
orders_and_customers_app.controller('CustomersController', function($scope, CustomerFactory){
			CustomerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			$scope.addCustomers = function(){
				console.log($scope.newCustomer)
				CustomerFactory.addCustomers($scope.newCustomer, function(){
					CustomerFactory.getCustomers(function(data){
						$scope.customers = data;
						$scope.newCustomer = {};
					});
				});
			}
			$scope.deleteCustomers = function(customer){
				console.log("deleting" +customer);
				CustomerFactory.deleteCustomers(customer, function(){
					CustomerFactory.getCustomers(function(data){
						$scope.customers = data;
					});
				})
			}
		})
/// Dashboard Controller ///
orders_and_customers_app.controller('DashboardController', function($scope, DashboardFactory, ProductsFactory, OrdersFactory, CustomerFactory, ReviewsFactory){
			CustomerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			ProductsFactory.getProducts(function(data){
				$scope.products = data;
			});
			OrdersFactory.getOrders(function(data){
				$scope.orders = data;
			});
			ReviewsFactory.getReviews(function(data){
				$scope.reviews = data;
			});
		});
/// Orders Controller ///
orders_and_customers_app.controller('OrdersController', function($scope,OrdersFactory, CustomerFactory, ProductsFactory){
			OrdersFactory.getOrders(function(data){
				$scope.orders = data;
			});
			CustomerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			ProductsFactory.getProducts(function(data){
				$scope.products = data;
			});
			$scope.addOrders = function(){
				console.log("adding new order in orders controller" + $scope.newOrder);
				OrdersFactory.addOrders($scope.newOrder, function(){
					OrdersFactory.getOrders(function(data){
						$scope.orders = data;
						$scope.newOrder = {};
					});
				});
			}
			$scope.deleteOrders = function(order){
				console.log("deleting" + order);
				OrdersFactory.deleteOrders(order, function(){
					OrdersFactory.getOrders(function(data){
						$scope.orders = data;
					});
				})
			}
		})
/// Products Controller /// 
orders_and_customers_app.controller('ProductsController', function($scope, ProductsFactory){
			ProductsFactory.getProducts(function(data){
				$scope.products = data;
			});
			$scope.addProducts = function(){
				ProductsFactory.addProducts($scope.newProduct, function(){
					ProductsFactory.getProducts(function(data){
						$scope.products = data;
						$scope.newProduct = {};
					});
				})
			}
			$scope.deleteProducts = function(product){
				ProductsFactory.deleteProducts(product, function(){
					ProductsFactory.getProducts(function(data){
						$scope.products = data;
					})
				})
			}
		})
/// Reviews Controller /// 
orders_and_customers_app.controller('ReviewsController', function($scope, CustomerFactory, ProductsFactory,ReviewsFactory){
			CustomerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			ProductsFactory.getProducts(function(data){
				$scope.products = data;
			});
			ReviewsFactory.getReviews(function(data){
				$scope.reviews = data;
			});

			$scope.addReviews = function(){
				ReviewsFactory.addReviews($scope.newReview, function(){
					ReviewsFactory.getReviews(function(data){
						$scope.reviews = data;
						$scope.newReview = {};
					});
				})
			}

			$scope.deleteReviews = function(review){
				ReviewsFactory.deleteReviews(review, function(){
					ReviewsFactory.getReviews(function(data){
						$scope.reviews = data;
					})
				})
			}
});