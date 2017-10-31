/* global angular */

angular.module('citizens-app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/citizens', {
    templateUrl: 'js/routes/citizens/template.html'
  })
})
