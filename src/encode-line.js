const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  let accum = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      if (counter === 0) {
        counter = 2;
      } else {
        counter += 1;
      }
    } else {
      if (counter === 0) {
        accum += str[i];
      } else {
        accum += counter + str[i];
        counter = 0;
      }
    }
  }

  return accum;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
