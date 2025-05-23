const app = angular.module('blogApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostController'
    })
    .when('/post/:id', {
      templateUrl: 'views/post.html',
      controller: 'PostDetailController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// Filtro para confiar no HTML do conteúdo
app.filter('trustHtml', ['$sce', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}]);