import encryptModule from './encrypt.js';
import decryptModule from './decrypt.js';

const enc = encryptModule('Hello World!');
const dec = decryptModule(enc);

console.log({ enc, dec });
