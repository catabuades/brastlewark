/* global angular */

(function () {
  var urlSearch = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

  angular.module('tickets-app')
      .factory('dataService', function ($http) {
        function getKeywordSearch (keyword) {
          var url = urlSearch.replace('<%KEYWORD%>', keyword)
          return $http.get(url)
        }

        return {
          getKeywordSearch: getKeywordSearch
        }
      })
})()
