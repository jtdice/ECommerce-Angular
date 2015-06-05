(function() {
	'use strict';
	// App Module: the name AngularStore matches the ng-app attribute in the
	// main
	// <html> tag
	// the route provides parses the URL and injects the appropriate partial
	// page
	angular.module('app', [ 'ngRoute', 'ngCookies' ]).config(config).run(run);
	config.$inject = [ '$routeProvider', '$locationProvider' ];
	function config($routeProvider, $locationProvider) {
		$routeProvider.when('/login', {
			controller : 'LoginController',
			templateUrl : 'login/login.view.html',
			controllerAs : 'lc'
		})

		.when('/', {
			controller : 'ProductsController',
			templateUrl : 'products/products.view.html',
			controllerAs : 'pc'
		})

		.when('/cart', {
			controller : ShoppingCartController,
			templateUrl : 'shoppingcart/shoppingcart.view.html'
		})

		.otherwise({
			redirectTo : '/login'
		});
	}

	run.$inject = [ '$rootScope', '$location', '$cookieStore', '$http' ];
	function run($rootScope, $location, $cookieStore, $http) {

		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
		if ($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic '
					+ $rootScope.globals.currentUser.authdata;
		}

		$rootScope.$on('$locationChangeStart',
				function(event, next, current) {
					// redirect to login page if not logged in and trying to
					// access a restricted page
					var restrictedPage = $.inArray($location.path(),
							[ '/login' ]) === -1;
					var loggedIn = $rootScope.globals.currentUser;
					if (restrictedPage && !loggedIn) {
						$location.path('/login');
					}
				});
		$rootScope.navigatetocart = function(path) {
			$location.path(path);
		};
	}
})();