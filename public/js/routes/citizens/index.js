/* global angular */

angular.module('citizens-app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/citizens/:query', {
    templateUrl: 'js/routes/citizens/template.html',
    controller: 'resultsController'
  })
})
