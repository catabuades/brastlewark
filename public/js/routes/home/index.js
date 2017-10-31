/* global angular */

angular.module('citizens-app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/routes/home/template.html'
  })
})
