/* global angular */

/* Controller en el qual guardo la query en una variable para después hacer la comparación de la query con el
diccionario que he creado en un principio. Además creo los valores Male y Female, para asignarselos a los usuarios
de forma aleatoria. */

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

/* El diccionario también me sirve para poder aplicar los filtros, de éste modo cada filtro esta asigando a
una propiedad, que contiene un objeto con todos los valores */

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

/* Condiciones que se recorren para comparar la query introducida en el buscador principal con los valores del
objeto de la propiedad, si no coincide, pasa a la siguiente propiedad, hasta que se produce el match y entonces
devuelve el resultado con los usuarios que contienen la palabra clave */

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

/* Cuando se capta el change, se lanza la función para aplicar el filtro de cada propiedad */

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
