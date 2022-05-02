const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let numbers = arr;
  //throw new NotImplementedError('Not implemented');
  let indexesOfMinusOne = []; // [0, 3, 5]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === -1) {
      indexesOfMinusOne.push(i);
    }
  }

  for (let i = 0; i < indexesOfMinusOne.length; i++) {
    numbers.splice(indexesOfMinusOne[i] - i, 1);
  }

  numbers.sort((a, b) => a - b);
  for (i = 0; i < indexesOfMinusOne.length; i++) {
    numbers.splice(indexesOfMinusOne[i], 0, -1);
  }
  return numbers;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
