const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(number) {
  const numStr = number.toString();
  let removeIndex = -1;

  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] < numStr[i + 1]) {
      removeIndex = i;
      break;
    }
  }

  if (removeIndex === -1) {
    removeIndex = numStr.length - 1;
  }

  return Number(numStr.slice(0, removeIndex) + numStr.slice(removeIndex + 1))
}

module.exports = {
  deleteDigit,
};
