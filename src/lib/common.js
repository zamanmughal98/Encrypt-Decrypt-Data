import { randomBytes } from 'crypto';

export const algorithm = 'aes-256-cbc';
export const key = randomBytes(32);
export const iv = randomBytes(16);
