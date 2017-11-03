/* global angular */

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
