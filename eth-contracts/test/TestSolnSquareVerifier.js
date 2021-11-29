const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const zokrates = require("../../zokrates/code/square/proof.json");

contract('TestSolnSquareVerifier', accounts => {
    describe('Exercise SolnSquareVerifier', function(){
        beforeEach(async function() {
            this.contract = await SolnSquareVerifier.new({from: accounts[0]});
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('Addition of new solution', async function(){
            await this.contract.addSol(accounts[1], 1, zokrates.proof.a, zokrates.proof.b, zokrates.proof.c, zokrates.inputs, {from: accounts[0]})
            erroFlag = false
            try{
                await this.contract.addSol(accounts[1], 1, zokrates.proof.a, zokrates.proof.b, zokrates.proof.c, zokrates.inputs, {from: accounts[0]})
            }
            catch{
                errorFlag = true
            }
            assert.equal(errorFlag, true, 'The solution was properly added') 
        });
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Token minting', async function(){
            await this.contract.addSol(accounts[1], 1, zokrates.proof.a, zokrates.proof.b, zokrates.proof.c, zokrates.inputs, {from: accounts[0]})
            await this.contract.mint(accounts[1], 1, {from: accounts[0]})
            erroFlag = false
            try{
                await this.contract.mint(accounts[1], 1, {from: accounts[0]})
            }
            catch{
                errorFlag = true
            }
            assert.equal(errorFlag, true, 'The token was properly minted')
        });
    });
})