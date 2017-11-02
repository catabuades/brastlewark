/* global angular */

angular.module('citizens-app')
  .controller('detailsController', function ($scope, $routeParams, dataService, utilsService) {
    const idCitizen = $routeParams.id
    console.log(idCitizen)
    dataService.getDetailsCitizen()
          .then(data => {
            data = data.map(obj => {
              return obj
            })
            console.log(data)
          })
  })
