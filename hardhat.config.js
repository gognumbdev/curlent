/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle")

module.exports = {
  deployer:{
    name:"Curlent Payment",
    address:"0xC61D4ee4B910E52E04512bbf7CcEb0Ab48072227",
    chain:"ethereum",
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/",
      accounts: [process.env.ROPSTEN_PRIVATE_KEY]
    },
    optimismKovan: {
      url: "https://kovan.optimism.io/",
      accounts: [process.env.OPTIMISM_PRIVATE_KEY]
    },
    arbitumRinkeby: {
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: [process.env.ARBITUM_PRIVATE_KEY]
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.BSC_PRIVATE_KEY]
    },
    hardhat: {
      chainId: 1337
    },
    // polygonMumbai: {
    //      url: "https://rpc-mumbai.maticvigil.com",
    //      accounts: [process.env.ETHEREUM_PRIVATE_KEY]
    // },
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
