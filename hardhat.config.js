require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers") ;
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("solidity-coverage");
const {task} = require("hardhat/config");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config = {
  solidity: "0.8.4",
  networks: {
    dev: {
      url: "http://localhost:7545",
      gasPrice: 20,
      saveDeployments: true
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 10000000000,
      blockGasLimit: 1000000
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 5100000000,
      blockGasLimit: 1000000
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
    deployments: "./deployments"
  },
};

module.exports = config;

