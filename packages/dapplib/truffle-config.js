require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area trophy find cost outside champion coral light army gas'; 
let testAccounts = [
"0xf6a5422eef0c1349ec4f9d40405f348912d1c9f6e8369b45381ee059b911e937",
"0x510cf648721730257fab95c242129415303bf42b910e2f418d744b441327b4be",
"0x618b2fa31dbf565255c3a6fed02968f991ed48cac41ee0ed18532799281b7f4f",
"0x09475e72568f7ef057665a6ba42c8723ea1dbe103d3d2d16a914dd3f4764cf7e",
"0x025a998ffd3b46f1b9771a7e145a8d2a1b752e6d3bfbe36cbb567df499c5320f",
"0xc5e07e8baae9964c44e842d84e7445fda549291f4ff4f61bcf6229f7f78bab7d",
"0x3295c96ab12e1d1316a36e6ed44319b970abefd2c8ead649f38d1bf1cc713c80",
"0x768f79c609a585a364e62acd003d184573a285e7d8adbbcd40aa2515639c6769",
"0x229126114ba7a07c18565a6959507acec009a3875ffb5c14fd111a68193abc05",
"0x1d670ec23bf9e3ad2be0e7dc411596a85d088ba89b1ee75aae1332f081db28e1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
