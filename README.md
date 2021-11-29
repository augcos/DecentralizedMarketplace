# Udacity Blockchain Capstone
This code is part of the Capstone Project for tht Blockchain Developer Nanodegree by Udacity. The goal of this project is to implement a decentralized real estate market in the ethereum network. For this project, zk-SNARK verified ERC-721 tokens that represent title to the properties were minted and transacted on the Rinkeby testnet.

## Development
The project vas developed using the following software:
```
Node.js         v10.19.0
npm             v8.1.1
Truffle         v5.4.14
OpenZeppelin    v2.0.0
Solidity        v0.5.0
```

## How to install?
Before running this project in your local system, you will need to have Node.js, npm and Truffle preinstalled. After cloning this repository, run the following command to install all the necessary dependencies:
```
npm install
```

## Test the project
If you want to modify the testing of the project, you can modify the TestSupplyChain.js file in the Test folder. To test the project, run the following commands:
```
truffle compile
truffle test
``` 



## Run the project
### Deploy to a local blockchain
First start the Truffle development enviroment. Run the following command, which will launch a local ethereum blockchain on 127.0.0.1:9454 as well as the development enviroment:
```
truffle develop
```
Next, compile the code and deploy from the Truffle development enviroment using the following commands:
```
compile
migrate --reset
```

### Deploy to the Rinkeby testnet
First start the Truffle development enviroment. Run the following commands to compile the code and deploy to the Rinkeby testnet (deployment make take a few minutes):
```
compile
migrate --reset --network rinkeby
```
In order for this deployment to be successfull, you will need to do two changes to the project. First, create a file in the same directory as truffle-config.js named .secret with the mnemonic to you ethereum account. Next, add your Infura endpoint address to the infuraKey variable in the truffle-config.js file. You can already find the project deployed on the Rinkeby testnet here:
```
    Verifier:               https://rinkeby.etherscan.io/address/0xCB2d66bd0e8260b61B1BBB641C0785778BEf6fC2          
    SolnSquareVerifier:     https://rinkeby.etherscan.io/address/0x4A87037a1908f5b7392006165f6Af273248dac27
```
To mint tokens, run the _mint.js_ file from your terminal. Remember to change set the .secret file, to add your Infura endpoint address and to add the address belonging to the .secret mnemonic to the _owner_ variable. You will also need to add to the _contractAddress_ the SolnSquareVerifier contract address deployed by you:
'''
node mint.js
'''
You can find ten token already deployed at OpenSea collection: https://testnets.opensea.io/collection/unidentified-contract-xzxlfuywlg. You can check that the first five tokens were transacted to a different address:
    https://testnets.opensea.io/assets/0x4a87037a1908f5b7392006165f6af273248dac27/0
    https://testnets.opensea.io/assets/0x4a87037a1908f5b7392006165f6af273248dac27/1
    https://testnets.opensea.io/assets/0x4a87037a1908f5b7392006165f6af273248dac27/2
    https://testnets.opensea.io/assets/0x4a87037a1908f5b7392006165f6af273248dac27/3
    https://testnets.opensea.io/assets/0x4a87037a1908f5b7392006165f6af273248dac27/4

## Contract ABI
The contract ABI of the SolnSquareVerifier is as follows:

'''
[ { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Approval',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'ApprovalForAll',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Transfer',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'newSolution',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0xa8348bf22f24dfdfbd206656d9911e021b39e58b4011b53045a11814d6b264a0' },
  { anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'ownerTransference',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0xb54f69a22c2850907e06f929b4b7654011d5f09ec1d99bfe9be09589c7feed51' },
  { anonymous: false,
    inputs: [ [Object] ],
    name: 'pauseEvent',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0x3972dd2b7e2497f117a1466d95950e53e1185d6a905c8007a94caa115ccf6804' },
  { anonymous: false,
    inputs: [ [Object] ],
    name: 'unpauseEvent',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature:
     '0x446f7ddd9a53c275b91e730638e810b20623089fdd9736ccc22ec7963e6e5696' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: '__callback',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x27dc297e' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: '__callback',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x38bbfa50' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'approve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x095ea7b3' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'balanceOf',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x70a08231' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'getApproved',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x081812fc' },
  { constant: true,
    inputs: [],
    name: 'getOwner',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x893d20e8' },
  { constant: true,
    inputs: [ [Object], [Object] ],
    name: 'isApprovedForAll',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xe985e9c5' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'mint',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x40c10f19' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'ownerOf',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6352211e' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x02329a29' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x42842e0e' },
  { constant: false,
    inputs: [ [Object], [Object], [Object], [Object] ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb88d4fde' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'setApprovalForAll',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xa22cb465' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'supportsInterface',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x01ffc9a7' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'tokenByIndex',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x4f6ccce7' },
  { constant: true,
    inputs: [ [Object], [Object] ],
    name: 'tokenOfOwnerByIndex',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2f745c59' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'tokenURI',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc87b56dd' },
  { constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x18160ddd' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'transferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x23b872dd' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xf2fde38b' },
  { constant: true,
    inputs: [ [Object], [Object], [Object], [Object] ],
    name: 'verifyTx',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x621e9ec0' },
  { constant: false,
    inputs:
     [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    name: 'addSol',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x863e560e' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'solMint',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xad4a2424' } ]
'''

