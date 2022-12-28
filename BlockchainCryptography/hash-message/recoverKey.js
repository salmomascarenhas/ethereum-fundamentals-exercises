/* 
1. Given a message, signature, and recoveryBit find the public key and return it! Be sure to hash the message when passing it to the recovery method.

Use the noble-secp256k1 documentation to find the correct method and parameters for this one.
*/

const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

function recoverKey(message, signature, recoveryBit) {
    const msgHash = hashMessage(message);
    
    return secp.recoverPublicKey(msgHash, signature, recoveryBit);
}

module.exports = recoverKey;
