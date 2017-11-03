/* global angular */

/* Controller que se encarga de comparar la id para poder capturar los valores de los parámetros del objeto elegido */

angular.module('citizens-app').controller('detailsController', function ($scope, $routeParams, dataService) {
  const idCitizen = parseInt($routeParams.idCitizen)
  console.log($routeParams.idCitizen)
  dataService.getDetailsCitizen().then(data => {
    data = data.filter(obj => obj.id === idCitizen)

    $scope.citizen = data
    $scope.friends = $scope.citizen[0].friends
    console.log($scope.friends)
  })
})
