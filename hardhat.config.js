require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync("secrete.txt").toString();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 4202,
    },
    sepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [privateKey],
      gasPrice: 1000000000,
    },
    BitTorrent: {
      url: "https://pre-rpc.bt.io/",
      accounts: [privateKey],
      gasPrice: 1000000000,
    },
    zkEVMCardonaTestnet: {
      url: "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public",
      accounts: [privateKey],
      gas: 6000000,
      gasPrice: 20000000000,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/2bGIFu-iEnl9RvAOTe1ddZI2gBnuYQGS",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};

// 83462bcaacfb352a27147a908ebf24c5 - client ID
// s7BvH-aXDBsdW0qFMA77FEfI1TWeYAq1dciCqbvZwIrjcHcNx0vSEi2xv5_eFF-bJ6A_C9Mkch7r5IWbih2wvw - secrete key
