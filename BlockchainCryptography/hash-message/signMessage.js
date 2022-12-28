/*
Let's sign a message!

1. First step is to hash it using the hashMessage function you created in the last stage (we've already imported it for you on line 2);
2. Once you have the message hash, use the sign method from ethereum-cryptography.
Note
- The sign method will take your message hash along with the constant PRIVATE_KEY declared at the top of the file. This private key is a valid key that could be used to authorize blockchain transactions. Never use this specific key because it is published on the internet, so many people including yourself could authenticate with this specific private key. In future lessons we'll be discussing good private key hygene to avoid losing funds.
- The ethereum-cryptography library uses noble-secp256k1, so the import comes from ethereum-cryptography but the detailed documentation is in the readme of noble-secp256k1.

1. The sign method takes an optional third parameter called options, which you'll see in the documentation. Use this parameter to return the recovered bit so that the public key can be recovered from this signature.
*/

const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) { 
    const msgHash = hashMessage(msg); // Hash message with SHA256 Hash;     
    const signatureMessage = await secp.sign(msgHash, PRIVATE_KEY, {recovered: true}); // Asign message with PIVATE_KEY;

    return signatureMessage;
}

module.exports = signMessage;
