/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      gasPrice: 20000000000,
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
}