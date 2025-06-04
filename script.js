angular.module('blogApp', ['ngSanitize'])
  .controller('BlogController', function($scope, $http) {
    // Variáveis de controle
    $scope.postagens = [];
    $scope.postSelecionado = null;
    $scope.carregando = true;
    $scope.erro = false;
    $scope.mensagemErro = '';

    // URL da API
    const API_URL = 'https://avc-api-rldt.onrender.com';

    // Função para carregar todas as postagens
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

    // Função para selecionar um post específico
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

    // Função para voltar à lista de posts
    $scope.voltarParaLista = function() {
      $scope.postSelecionado = null;
      $scope.erro = false;
    };

    // Função para mostrar todos os posts (usada nos botões de navegação)
    $scope.mostrarTodosPosts = function() {
      $scope.postSelecionado = null;
      $scope.erro = false;
      if ($scope.postagens.length === 0) {
        $scope.carregarPostagens();
      }
    };

    // Carregar postagens ao inicializar
    $scope.carregarPostagens();
  });