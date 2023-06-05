 6.//[6] Fix getDuplicates
 //  The function getDuplicates is meant to return an array of duplicate elements in the       input   array, but it's not working correctly. Identify the issue and fix the function.

      function get Duplicates(arr) {
        let duplicates = [];
        for( let i =0 ; i < arr.lenght ; ++i) {
        for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
        duplicates.push(array[i]);
     }
      }
        }

console.log(duplicates)
