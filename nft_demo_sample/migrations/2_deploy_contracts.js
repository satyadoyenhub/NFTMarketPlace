var SimpleNFT = artifacts.require("./SimpleNFT.sol");
var SimpleNFTExchange = artifacts.require("./SimpleNFTExchange.sol");
var Auction = artifacts.require("./Auction.sol");
module.exports = function(deployer) {
  deployer.deploy(SimpleNFT);
  deployer.deploy(SimpleNFTExchange);
  deployer.deploy(Auction);
};
