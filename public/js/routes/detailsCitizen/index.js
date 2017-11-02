/* global angular */

angular.module('citizens-app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/citizens/details/:id', {
    templateUrl: 'js/routes/detailsCitizen/template.html',
    controller: 'detailsController'
  })
})
