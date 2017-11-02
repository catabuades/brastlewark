/* global angular */

angular.module('citizens-app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/citizens/details/:idCitizen', {
    templateUrl: 'js/routes/detailsCitizen/template.html',
    controller: 'detailsController'
  })
})
