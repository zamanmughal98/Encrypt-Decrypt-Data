import encryptModule from './enc-dec/encrypt.js';
import decryptModule from './enc-dec/decrypt.js';

const enc = encryptModule('Hello World!');
const dec = decryptModule(enc);

console.log({ enc, dec });
