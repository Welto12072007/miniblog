app.controller('PostController', function($scope, PostService) {
  $scope.posts = [];
  $scope.loading = true;

  PostService.getAllPosts()
    .then(function(response) {
      $scope.posts = response.data;
      $scope.loading = false;
    })
    .catch(function(error) {
      console.error('Error fetching posts:', error);
      $scope.loading = false;
    });
});

app.controller('PostDetailController', function($scope, $routeParams, PostService) {
  $scope.post = null;
  $scope.loading = true;

  PostService.getPostById($routeParams.id)
    .then(function(response) {
      $scope.post = response.data;
      $scope.loading = false;
    })
    .catch(function(error) {
      console.error('Error fetching post:', error);
      $scope.loading = false;
    });
});