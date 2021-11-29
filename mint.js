const HDWalletProvider = require("truffle-hdwallet-provider")
const proofList = [
    require("./proofs/proof0.json"),
    require("./proofs/proof1.json"),
    require("./proofs/proof2.json"),
    require("./proofs/proof3.json"),
    require("./proofs/proof4.json"),
    require("./proofs/proof5.json"),
    require("./proofs/proof6.json"),
    require("./proofs/proof7.json"),
    require("./proofs/proof8.json"),
    require("./proofs/proof9.json"),
]
const web3 = require('web3')

const contract = require('./eth-contracts/build/contracts/SolnSquareVerifier.json')
const abi = contract.abi
const infuraKey = "";
const fs = require('fs');
const mnemonic = fs.readFileSync("./eth-contracts/.secret").toString().trim();
const owner = ""
contractAddress = ""

async function mintExample() {
    const provider = new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`)
    const web3Instance = new web3(provider)

    if (contractAddress) {
        const contract = new web3Instance.eth.Contract(abi, contractAddress)
        console.log(abi)
        for (let i = 0; i < 10 ; i++) {
            let txSol = await contract.methods.addSol(owner, i, proofList[i].proof.a, proofList[i].proof.b, proofList[i].proof.c, proofList[i].inputs).send({from: owner})
            let txMint = await contract.methods.mint(owner, i).send({from: owner})
            console.log("Solution tx: " + txSol.transactionHash)
            console.log("Mint tx: " + txMint.transactionHash)
        }
    }
}

mintExample()