(function () {

angular.module('MenuApp',['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to categories if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
	  // Home page
	.state('home', {
	  url: '/',
	  templateUrl: 'src/templates/home.html'
	  })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html'
    })

    .state('items', {
      url: '/items',
      templateUrl: 'src/templates/items.html'
    });
}

})();