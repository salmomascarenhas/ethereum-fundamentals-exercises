const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

function recoverKey(message, signature, recoveryBit) {
    const msgHash = hashMessage(message);
    
    return secp.recoverPublicKey(msgHash, signature, recoveryBit);
}

module.exports = recoverKey;
