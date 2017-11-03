/* global angular */

(function () {
  const urlSearch = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

/* Realizo las llamadas al json, con el método GET para poder utilizar la data en los diferentes controllers */
  angular.module('citizens-app')
      .factory('dataService', function ($http) {
        function getKeywordSearch () {
          return $http.get(urlSearch).then(info => info.data.Brastlewark)
        }

        function getDetailsCitizen () {
          return $http.get(urlSearch).then(info => info.data.Brastlewark)
        }

        return {
          getKeywordSearch: getKeywordSearch,
          getDetailsCitizen: getDetailsCitizen
        }
      })
})()
