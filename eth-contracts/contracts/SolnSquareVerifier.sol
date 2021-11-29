pragma solidity ^0.5.0;

// define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./verifier.sol";

// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is TheCoolestToken, Verifier {
    // define a solutions struct that can hold an index & an address
    struct Solution{
        bytes32 index;
        address solAddres;
        bool exists;
    }

    // define a mapping of the above struct
    mapping(bytes32 => Solution) solutionList;

    // define a mapping to store unique solutions submitted
    mapping(uint256 => bytes32) indexList;

    // Create an event to emit when a solution is added
    event newSolution(bytes32 index, address solAddress, uint256 tokenId);

    // Create a function to add the solutions to the array and emit the event
    function addSol(address solAddress, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        bytes32 index = keccak256(abi.encodePacked(a,b,c,input));
        require(!solutionList[index].exists,"This solution already exists");
        bool solValid = verifyTx(a,b,c,input);
        require(solValid, "Proof is not valid");
        solutionList[index] = Solution(index,solAddress,true);
        indexList[tokenId] = index;
        emit newSolution(index,solAddress,tokenId);        
    }

    
    // Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function solMint(address to, uint256 tokenId) public {
        require(solutionList[indexList[tokenId]].exists, "This solution has already been used");
        mint(to, tokenId);
    }

}


  


























