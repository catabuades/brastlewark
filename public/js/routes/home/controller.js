/* global angular */

angular.module('citizens-app')
    .controller('searchController', function ($scope, $location) {
      $scope.getKeyword = function () {
        var keyword = $scope.keyword
        $location.path('/search/' + keyword)
      }
    })
