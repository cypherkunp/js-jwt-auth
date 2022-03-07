const jwt = require('jsonwebtoken');

function sign(payload, privateKey, signingInOptions) {
  try {
    let signOptions = { ...signingInOptions, subject: payload.username };
    const token = jwt.sign(payload, privateKey, signOptions);

    console.log('[jwt.api.sign.token]: ', token);
    return token;
  } catch (error) {
    console.error('[jwt.api.sign.error]: ', error);
    throw error;
  }
}

function decode(token) {
  try {
    const decoded = jwt.decode(token, { complete: true });

    console.log('[jwt.api.decode.payload]: ', decoded.payload);
    return { ...decoded.payload };
  } catch (error) {
    console.error('[jwt.api.decode.error]: ', error);
    throw error;
  }
}

function verify(token, publicKey, subject, verificationOptions) {
  try {
    let verifyOptions = { ...verificationOptions, subject: subject };
    const verified = jwt.verify(token, publicKey, verifyOptions);

    console.log('[jwt.api.verify.verified]: ', verified);
    return verified;
  } catch (error) {
    console.error('[jwt.api.verify.error]: ', error);
    throw error;
  }
}

module.exports = { sign, decode, verify };
