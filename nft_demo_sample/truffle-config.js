const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "hungry blanket solve sketch virtual entire smooth solution submit upon possible mind";



module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "35.76.54.130",
      port: 30115,
      network_id: "1889", // Match any network id
      gas: XXX
    },
    ganache_development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: XXX
    },
    ropsten: {
       //provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/e9858a2c7d3e4555bb520ffa0aadf6c0`,0),
       provider: () => new HDWalletProvider('XXX', `https://ropsten.infura.io/v3/e9858a2c7d3e4555bb520ffa0aadf6c0`,0),
       network_id: 3,       // Ropsten's id
       gas: XXX,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
       },
       
  },
  compilers: {
    solc: {
      version: "^0.8.9"
    }
  }
};
