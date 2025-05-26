angular.module('blogApp', ['ngSanitize'])
  .controller('BlogController', function($scope, $http) {
    $scope.postagens = [];

    $http.get('https://api-fake-blog.onrender.com/postagens/')
      .then(function(response) {
        $scope.postagens = response.data;
        localStorage.setItem('posts', JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.error("Erro ao carregar os posts da API:", error);
      });
  });
