  require("@nomicfoundation/hardhat-toolbox");

  /** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
    networks: {
      besu: {
        url: "http://localhost:8545", // RPC endpoint for your Besu node
        chainId: 1337,               // Besu dev mode chain ID (default is 1337)
        accounts: [
          "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",
        ],
      },
    },
    solidity: {
      version: "0.8.28",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    }
  };
