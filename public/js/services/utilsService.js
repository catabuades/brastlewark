/* global angular */

/* Para poder hacer las comparaciones del query en la búsqueda, me he servido de un diccionario.
De éste modo, recorro la array de objetos, los quales tienen X propiedades. Recorro cada objeto, y si la propiedad
que lée ya ha sido sumada al contador pasa a la siguiente, y sino la suma, de este modo, cada vez que encuentra una
nueva propiedad esta se suma a un objeto y creo el diccionario */

angular.module('citizens-app')
  .factory('utilsService', function (dataService) {
    function getDictionary (data) {
      const professions = data.reduce((acc, obj) => {
        for (var i of obj.professions) {
          if (!acc.includes(i)) {
            acc.push(i)
          }
        }

        return acc
      }, [])

      const hair_color = data.reduce((acc, obj) => {
        if (!acc.includes(obj.hair_color)) {
          acc.push(obj.hair_color)
        }

        return acc
      }, [])

      const name = data.reduce((acc, obj) => {
        if (!acc.includes(obj.name)) {
          acc.push(obj.name)
        }

        return acc
      }, [])

      const age = data.reduce((acc, obj) => {
        if (!acc.includes(obj.age)) {
          acc.push(obj.age)
        }

        return acc
      }, [])

      const gender = data.reduce((acc, obj) => {
        if (!acc.includes(obj.gender)) {
          acc.push(obj.gender)
        }
        return acc
      }, [])

      return {
        professions,
        hair_color,
        name,
        age,
        gender
      }
    }

    return { getDictionary }
  })
