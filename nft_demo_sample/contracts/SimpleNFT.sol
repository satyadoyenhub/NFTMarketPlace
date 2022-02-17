// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
contract SimpleNFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    NFTSale[] public _listed;
    struct NFTSale{
        uint256 id;
        uint price;
        bool isForSale;

    }
   
   //constructor
   
   constructor()ERC721("My_NFT","MNFT"){}
   
   
    // function to get sales price of NFT
    function getSalePrice(uint256 nftId) external view returns(uint){
       
    }
   
    //To mark NFT as sold
       function markAsSold(uint256 nftId)external {
       
    }

    //To mint NFT
    function mintNFT(string memory tokenURI,uint price,address minter) public  {
        
    }
   
    //To transfer NFT from current owner to new owner
    function transferNFT(address currentOwner,address newOwner,uint256 nftId) external{
        
    }
   //To get the status of NFT
    function getNftStatus(uint256 nftId) external view returns (bool){
        NFTSale storage nftForSale = _listed[nftId];
        return nftForSale.isForSale;
    }
   //To get the item id 
    function getitemId(uint i) public view returns(uint){
        return _listed[i].id;
    }
}
