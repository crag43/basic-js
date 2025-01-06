const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|"
  } = options;

  str = String(str);
  addition = String(addition);

  let formedAddition = "";
  for (let i = 1; i <= additionRepeatTimes; i++) {
    formedAddition += additionRepeatTimes === i ? addition : addition + additionSeparator
  }
  let repeatedString = "";
  for (let i = 1; i <= repeatTimes; i++) {
    repeatedString += repeatTimes === i ? str + formedAddition : str + formedAddition + separator
  }

  return repeatedString;
}

module.exports = {
  repeater
};
