import { createCipheriv } from 'crypto';
import { algorithm, key, iv } from './lib/common.js';

const encryptModule = (text) => {
  let cipher = createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

export default encryptModule;
