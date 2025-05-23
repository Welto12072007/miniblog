app.service('PostService', function($http) {
  const API_URL = 'http://localhost:3000';

  this.getAllPosts = function() {
    return $http.get(`${API_URL}/posts`);
  };

  this.getPostById = function(id) {
    return $http.get(`${API_URL}/posts/${id}`);
  };

  this.searchPosts = function(query) {
    return $http.get(`${API_URL}/posts?q=${query}`);
  };
});