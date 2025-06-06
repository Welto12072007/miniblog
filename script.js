angular.module('blogApp', ['ngSanitize'])
  .controller('BlogController', function($scope, $http) {
    
    $scope.postagens = [];
    $scope.postSelecionado = null;
    $scope.carregando = true;
    $scope.erro = false;
    $scope.mensagemErro = '';

    
    const API_URL = 'https://avc-api-wdw8.onrender.com';

    
    $scope.carregarPostagens = function() {
      $scope.carregando = true;
      $scope.erro = false;
      $scope.postSelecionado = null;

      $http.get(API_URL + '/postagens/')
        .then(function(response) {
          $scope.postagens = response.data;
          $scope.carregando = false;
          console.log('Postagens carregadas:', response.data);
        })
        .catch(function(error) {
          console.error("Erro ao carregar os posts da API:", error);
          $scope.carregando = false;
          $scope.erro = true;
          $scope.mensagemErro = 'Não foi possível carregar as postagens. Verifique sua conexão com a internet.';
        });
    };

    
    $scope.selecionarPost = function(postId) {
      $scope.carregando = true;
      
      $http.get(API_URL + '/postagens/' + postId)
        .then(function(response) {
          $scope.postSelecionado = response.data;
          $scope.carregando = false;
          console.log('Post carregado:', response.data);
        })
        .catch(function(error) {
          console.error("Erro ao carregar o post:", error);
          $scope.carregando = false;
          $scope.erro = true;
          $scope.mensagemErro = 'Não foi possível carregar esta postagem.';
        });
    };

    
    $scope.voltarParaLista = function() {
      $scope.postSelecionado = null;
      $scope.erro = false;
    };

    $scope.mostrarTodosPosts = function() {
      $scope.postSelecionado = null;
      $scope.erro = false;
      if ($scope.postagens.length === 0) {
        $scope.carregarPostagens();
      }
    };


    $scope.carregarPostagens();

  });