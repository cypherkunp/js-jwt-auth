const privateKey = require('../keys/private');
const publicKey = require('../keys/public');
const jwt = require('./jwt');

const payload = {
  username: 'devvratshukla@gmail.com',
  userId: '123456789',
  role: 'admin',
};

const signInOptions = {
  issuer: 'cypherkunp',
  subject: 'devvratshukla@gmail.com',
  expiresIn: '30m',
  algorithm: 'RS256',
};

const token = jwt.sign(payload, privateKey, signInOptions);
console.log('[index.token]', token);

const response = jwt.verify(token, publicKey, signInOptions.subject, signInOptions);
console.log('[index.response]', response);
