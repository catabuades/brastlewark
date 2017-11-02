/* global angular */

angular.module('citizens-app')
  .controller('resultsController', function ($scope, $routeParams, dataService, utilsService) {
    var query = $routeParams.query
    var gender = ['Male', 'Female']
    dataService.getKeywordSearch()
          .then(data => {
            data = data.map(obj => {
              obj.gender = gender[(Math.floor((Math.random() * 2) + 1)) - 1]
              return obj
            })
            console.log(data)

            const dict = utilsService.getDictionary(data)

            console.log(dict)
            if (dict.name.includes(query)) {
              console.log('entra name')
              $scope.results = data.filter(obj => obj.name === query)
            } else if (dict.professions.includes(query)) {
              console.log('entra professions')
              $scope.results = data.filter(obj => obj.professions.includes(query))
            } else if (dict.hair_color.includes(query)) {
              console.log('entra colors')
              $scope.results = data.filter(obj => obj.hair_color === query)
            } else if (dict.age.includes(query)) {
              console.log('entra age')
              $scope.results = data.filter(obj => obj.age === query)
            } else {
              console.log('entra gender')
              $scope.results = data.filter(obj => obj.gender === query)
            }
            // $scope.results = data.map(obj => {
            //   obj.name = obj.name.split(' ')[0]
            //   obj.name.surname = obj.name.split(' ')[1]
            //   return obj
            // })

            $scope.totalResults = $scope.results.length
            // console.log($scope.results.length)
          })
  })
