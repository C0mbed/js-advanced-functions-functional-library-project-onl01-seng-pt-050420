const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const item in collection) {
        callback(collection[item], item, collection)
      }
      return collection;
    },

    map: function(collection, callback) {
      const result = [];
      for (const item in collection) {
        result.push(callback(collection[item], item, collection));
      }
      return result;
    },

    reduce: function(collection, callback, acc) {
      let result = acc || collection[0];
      for (let item = acc ? 0 : 1; item < collection.length; item++) {
        result = callback(result, collection[item], collection);
      }
      return result;
    },

    find: function(collection, predicate) {
      for (const item in collection) {
        if (predicate(collection[item])) {
          return collection[item];
        }
      }
    },

    filter: function(collection, predicate) {
      const result = [];
      for (const item in collection) {
        if (predicate(collection[item])) {
          result.push(collection[item]);
        }
      }
      return result;
    },

    size: function(collection) {
      let count = 0;
      for (const item in collection) {
        count ++;
      }
      return count;
    },

    first: function(array, n) {
      if (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
          result.push(array[i]);
        }
        return result;

      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        let result = array.slice(Math.max(array.length - 5, 1 ))
        return result;

      } else {
        return array.slice(-1)[0];
      }
    },

    compact: function(array) {
      let result = [];
      for (const item in array) {
        if (array[item]) {
          result.push(array[item]);
        }
      }
      return result;
    },

    sortBy: function(array, callback) {
      const result = [];
      for (const item in array) {
        result.push(callback(array[item]));
      }
      console.log(result);
      return result.sort();
    },

    functions: function(object) {
      const result = [];
      for (const key in object) {
        if (typeof object[key] == "function") {
          result.push(key);
        } 
      }
      return result.sort();
    },


  }
})()

fi.libraryMethod()
