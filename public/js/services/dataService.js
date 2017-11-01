/* global angular */

(function () {
  var urlSearch = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

  angular.module('citizens-app')
      .factory('dataService', function ($http) {
        function getKeywordSearch () {
          return $http.get(urlSearch).then(info => info.data.Brastlewark)
        }

        return {
          getKeywordSearch: getKeywordSearch
        }
      })
})()
