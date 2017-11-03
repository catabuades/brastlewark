/* global angular */

/* Controller que se encarga de recoger la palabra introducida en el buscador */

angular.module('citizens-app')
    .controller('searchController', function ($scope, $location, dataService) {
      $scope.getKeyword = function () {
        const keyword = $scope.keyword
        $location.path('/citizens/' + keyword)
      }
    })
