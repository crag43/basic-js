const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedMessage = '';
    let keyIndex = 0;
    key = key.toLowerCase();
    
    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (/[a-zA-Z]/.test(char)) {
        let shift = key[keyIndex % key.length].charCodeAt(0) - 'a'.charCodeAt(0);
        let base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        let encryptedChar = String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
        encryptedMessage += encryptedChar.toUpperCase();

        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedMessage = '';
    let keyIndex = 0;
    key = key.toLowerCase();
    
    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (/[a-zA-Z]/.test(char)) {
        let shift = key[keyIndex % key.length].charCodeAt(0) - 'a'.charCodeAt(0);
        let base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        let decryptedChar = String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        decryptedMessage += decryptedChar.toUpperCase();

        keyIndex++;
      } else {
        decryptedMessage += char;
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
