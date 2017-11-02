/* global angular */

angular.module('citizens-app')
    .controller('searchController', function ($scope, $location, dataService) {
      $scope.getKeyword = function () {
        const keyword = $scope.keyword
        $location.path('/citizens/' + keyword)
      }
    })
