require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: 'https://eth-sepolia.g.alchemy.com/v2/nbf4sXCw4kS-gQAC4ZlnMqNYK4mRXeiY',
            accounts: ['3b410022b0d364daf2f867f7c59de456e77b61d76d10008b4d4de8bb8098ac72']
        }
    }

};