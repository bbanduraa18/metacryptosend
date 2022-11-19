require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/DXGUAcN3U_ef3lKTVmNnJ5nfQGqnzmoL',
      accounts: ['992a001da1cec4baed4ebf26b6f8ab7511d23df9452d277817b7645bdfd6bb06']
    }
  }
};
