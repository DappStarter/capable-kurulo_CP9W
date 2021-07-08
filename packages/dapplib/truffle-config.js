require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note punch purity install gloom slot genre'; 
let testAccounts = [
"0x3fea444f7da7dabbe50395aed3af72ccc087439130d52dd9d146817a757e4b79",
"0x6484754269553c377c19227b42e083be0a3c3db9ffb42be6480dee4a4bb44849",
"0x4f093204815ef496727f8c3cb64b529c269c9ceee93aab1f2846973c4a6ce123",
"0x5beff0fc07ebb58a2f3b665e947e33b522f3999a0351c9a0ff7f69a1888aa5af",
"0xe9a14e161e3ac52887ffcafce3dba58009d3958bcca4b4ee3400b6c1b6632997",
"0x8216dc6c76d2912539da0e85bdfd4f663bc9234def16ed306d4a4252617788ec",
"0xe84517f8af0f31ecec27663b92e41620f38d05e8edcb020c7c046798c308e4b2",
"0xcedf1df5f65358e7e8660327aae9a4322ec858b5f2e7d4f3eccb69adf9712474",
"0x359ff176d569f60a4c674120baad79b584a079d620b1c4f3a5fd69d77a810110",
"0xda7d8963c3252d1e7a43c949ed53c8a5166c914957197bfc1f6461eb66d33e08"
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
            version: '^0.8.0'
        }
    }
};

