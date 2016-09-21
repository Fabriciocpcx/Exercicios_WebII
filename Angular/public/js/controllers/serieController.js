angular.module('series') contato
  .controller('serieController',
    function ($scope, $http, $routeParams) {
      $scope.serie = {};
      $scope.mensagem = '';

      if ($routeParams.id) {
        $http.get('api/series/' + $routeParams.id)
          .success(function (serie) {
            $scope.serie = serie;
          })
          .error(function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter';
          });
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if ($routeParams.id) {
            $http.put('/api/series/' + $scope.serie._id, $scope.serie)
              .success(function () {
                $scope.mensagem = 'Serie alterada com sucesso';
              }).error(function (erro) {
              console.log(erro);
              $scope.mensagem = 'Não foi possível alterar';
            });
          } else {
            $http.post('/api/series', $scope.serie)
              .success(function () {
                $scope.serie = {};
                $scope.mensagem = 'Foto cadastrada com sucesso';
              })
              .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar a foto';
              });
          }
        }};

    });
