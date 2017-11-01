/* global angular */

angular.module('citizens-app')
  .controller('resultsController', function ($scope, $routeParams, dataService) {
    var query = $routeParams.query
    var gender = ['Male', 'Female']
    dataService.getKeywordSearch()
          .then(data => {
            data = data.map(obj => {
              obj.gender = gender[(Math.floor((Math.random() * 2) + 1)) - 1]
              return obj
            })
            console.log(data)

            var a = data.reduce((acc, obj) => {
              for (var i of obj.professions) {
                if (!acc.includes(i)) {
                  acc.push(i)
                }
              }

              return acc
            }, [])

            var b = data.reduce((acc, obj) => {
              if (!acc.includes(obj.hair_color)) {
                acc.push(obj.hair_color)
              }

              return acc
            }, [])

            var c = data.reduce((acc, obj) => {
              if (!acc.includes(obj.name)) {
                acc.push(obj.name)
              }

              return acc
            }, [])

            dict = {
              professions: a,
              hair_color: b,
              name: c
            }

            console.log(dict)
            if (dict.name.includes(query)) {
              console.log('entra name')
              $scope.results = data.filter(obj => obj.name === query)
            } else if (dict.professions.includes(query)) {
              console.log('entra professions')
              $scope.results = data.filter(obj => obj.professions.includes(query))
            } else {
              console.log('entra colors')
              $scope.results = data.filter(obj => obj.hair_color === query)
            }
            console.log($scope.results.length)
          })
  })
