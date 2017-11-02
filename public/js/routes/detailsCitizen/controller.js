/* global angular */

// angular.module('citizens-app')
//   .controller('detailsController', function ($scope, $routeParams, dataService, utilsService) {
//     const idCitizen = $routeParams.id
//     console.log(idCitizen)
//     dataService.getDetailsCitizen()
//           .then(data => {
//             data = data.map(obj => {
//               return obj
//             })
//             console.log(data)
//           })
//   })

// angular.module('citizens-app')
//     .controller('detailsController', function ($scope, $routeParams, dataService) {
//       $scope.getDetailsCitizen = function () {
//         const idCitizen = $routeParams.id
//         $location.path('/citizens/details/' + idCitizen)
//       }
//     })

angular.module('citizens-app')
  .controller('detailsController', function ($scope, $routeParams, dataService) {
    const idCitizen = $routeParams.id
    dataService.getDetailsCitizen()
          .then(data => {
            data = data.filter(obj => obj.id === idCitizen)
            console.log(data)
          })
  })
