var ERC721MintableComplete = artifacts.require('TheCoolestToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0]
    const account_two = accounts[1]

    const baseFirst = 12
    const baseSecond = 70

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one})
            // mint multiple tokens
            for (let i=0; i<10; i++){
                await this.contract.mint(account_one,i+baseFirst,{from: account_one});
            }
            for (let i=0; i<20; i++){
                await this.contract.mint(account_two,i+baseSecond,{from: account_one});
            }
        })

        it('should return total supply', async function () { 
            let supply =  await this.contract.totalSupply.call({from: account_one})
            assert.equal(supply,30)
        })

        it('should get token balance', async function () { 
            let balanceFirst = await this.contract.balanceOf.call(account_one,{from: account_one})
            let balanceSecond = await this.contract.balanceOf.call(account_two,{from: account_one})
            assert.equal(balanceFirst, 10, "The balance of the first account is wrong");
            assert.equal(balanceSecond, 20, "The balance of the second account is wrong");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenId = 15
            let tokenURI = await this.contract.tokenURI.call(tokenId, {from: account_one})
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/"+ tokenId, tokenURI, "Token URI is wrong")
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenId = 15
            await this.contract.safeTransferFrom(account_one, account_two, tokenId, {from: account_one})
            let tokenOwner = await this.contract.ownerOf(tokenId)
            assert.equal(tokenOwner, account_two, "Token was not properly transfered")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one})
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let errorFlag = false;
            try {
                await this.contract.mint(account_one,42,{from: account_two})
            }
            catch {
                errorFlag = true;
            }
            assert.equal(errorFlag, true, "Minted by an non-owner account failed")
        })

        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.getOwner.call()
            assert.equal(contractOwner,account_one,"This is not the contract owner")
        })

    });
})