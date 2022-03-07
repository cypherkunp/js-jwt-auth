const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 1024 });

function getRSAKeyPair() {
  const pair = key.generateKeyPair();

  return {
    privateKey: pair.exportKey(),
    publicKey: pair.exportKey('public'),
  };
}
