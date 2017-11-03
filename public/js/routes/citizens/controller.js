/* global angular */

angular.module('citizens-app')
    .controller('resultsController', function ($scope, $routeParams, dataService, utilsService) {
      const query = $routeParams.query
      $scope.genders = ['Male', 'Female']
      let dataInfo
      dataService.getKeywordSearch()
            .then(data => {
              dataInfo = data
              data = data.map(obj => {
                obj.gender = $scope.genders[(Math.floor((Math.random() * 2) + 1)) - 1]
                return obj
              })

              const dict = utilsService.getDictionary(data)
              angular.element(document).ready(function () {
                const availableTags = dict.professions
                $('#professions').autocomplete({ source: availableTags })
                const availableNames = dict.name
                $('#names').autocomplete({ source: availableNames })
                const availableAges = dict.age.map(age => age.toString())
                $('#ages').autocomplete({ source: availableAges })
              })

              $scope.colors = dict.hair_color

              if (dict.name.includes(query)) {
                $scope.results = data.filter(obj => obj.name === query)
              } else if (dict.professions.includes(query)) {
                $scope.results = data.filter(obj => obj.professions.includes(query))
              } else if (dict.hair_color.includes(query)) {
                $scope.results = data.filter(obj => obj.hair_color === query)
              } else if (dict.age.includes(query)) {
                $scope.results = data.filter(obj => obj.age === query)
              } else {
                $scope.results = data.filter(obj => obj.gender === query)
              }

              $scope.totalResults = $scope.results.length
            })

      $scope.changeColor = function () {
        $scope.results = dataInfo.filter(obj => obj.hair_color === $scope.color)
        $scope.totalResults = $scope.results.length
      }

      $scope.changeGender = function () {
        $scope.results = dataInfo.filter(obj => obj.gender === $scope.gender)
        $scope.totalResults = $scope.results.length
      }

      $scope.changeAge = function () {
        $scope.results = dataInfo.filter(obj => obj.age == $scope.age)
        $scope.totalResults = $scope.results.length
      }

      $scope.changeProfession = function () {
        $scope.results = dataInfo.filter(obj => obj.professions == $scope.professions)
        $scope.totalResults = $scope.results.length
      }

      $scope.changeName = function () {
        $scope.results = dataInfo.filter(obj => obj.name === $scope.name)
        $scope.totalResults = $scope.results.length
      }
    })
