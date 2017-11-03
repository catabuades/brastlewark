/* global angular */

angular.module('citizens-app').controller('detailsController', function ($scope, $routeParams, dataService) {
  const idCitizen = parseInt($routeParams.idCitizen)
  dataService.getDetailsCitizen().then(data => {
    data = data.filter(obj => obj.id === idCitizen)

    $scope.citizen = data
    $scope.friends = $scope.citizen[0].friends
    console.log($scope.friends)
  })
})
