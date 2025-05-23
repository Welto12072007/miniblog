app.controller('PostController', function($scope, PostService) {
  $scope.posts = [];
  $scope.loading = true;
  $scope.error = null;

  function loadPosts() {
    PostService.getAllPosts()
      .then(function(response) {
        $scope.posts = response.data;
        $scope.loading = false;
      })
      .catch(function(error) {
        console.error('Error fetching posts:', error);
        $scope.error = 'Erro ao carregar os posts. Por favor, tente novamente.';
        $scope.loading = false;
      });
  }

  $scope.searchPosts = function() {
    if ($scope.searchQuery) {
      $scope.loading = true;
      PostService.searchPosts($scope.searchQuery)
        .then(function(response) {
          $scope.posts = response.data;
          $scope.loading = false;
        })
        .catch(function(error) {
          console.error('Error searching posts:', error);
          $scope.error = 'Erro na busca. Por favor, tente novamente.';
          $scope.loading = false;
        });
    } else {
      loadPosts();
    }
  };

  loadPosts();
});

app.controller('PostDetailController', function($scope, $routeParams, PostService) {
  $scope.post = null;
  $scope.loading = true;
  $scope.error = null;

  PostService.getPostById($routeParams.id)
    .then(function(response) {
      $scope.post = response.data;
      $scope.loading = false;
    })
    .catch(function(error) {
      console.error('Error fetching post:', error);
      $scope.error = 'Erro ao carregar o post. Por favor, tente novamente.';
      $scope.loading = false;
    });
});