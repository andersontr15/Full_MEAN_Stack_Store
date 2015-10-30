'use strict';
orders_and_customers_app.config(function ($routeProvider) {
     	 $routeProvider
     	 .when('/',{
     	 	templateUrl: 'partials/root.html'
     	 })
        .when('/customers',{
            templateUrl: 'partials/customers.html'
        })
        .when('/orders',{
            templateUrl: 'partials/orders.html'
        })
        .when('/settings',{
        	templateUrl: 'partials/settings.html'
        })
        .when('/products',{
        	templateUrl: 'partials/products.html'
        })
        .when('/dashboard',{
        	templateUrl: 'partials/dashboard.html'
        })
        .when('/reviews',{
        	templateUrl: 'partials/reviews.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });