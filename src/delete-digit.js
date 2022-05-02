const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let arr = [];
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    arr.push(str.slice(0, i) + str.slice(i + 1));
  }
  return Math.max(...arr);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
