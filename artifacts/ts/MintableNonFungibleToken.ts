export const MintableNonFungibleToken = 
{
  "contractName": "MintableNonFungibleToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_approved",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "implementsERC721",
      "outputs": [
        {
          "name": "_implementsERC721",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "_totalSupply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenMetadata",
      "outputs": [
        {
          "name": "_infoUrl",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "numTokensTotal",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getOwnerTokens",
      "outputs": [
        {
          "name": "_tokenIds",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6115238061001e6000396000f3006060604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063081812fc1461016e578063095ea7b3146101d15780631051db341461021357806318160ddd1461024057806323b872dd146102695780632f745c59146102ca57806340c10f19146103205780636352211e146103625780636914db60146103c557806370a082311461046157806395d89b41146104ae578063a9059cbb1461053c578063af129dc21461057e578063d63d4af0146105a7575b600080fd5b34156100eb57600080fd5b6100f3610635565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610133578082015181840152602081019050610118565b50505050905090810190601f1680156101605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561017957600080fd5b61018f60048080359060200190919050506106dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101dc57600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106ef565b005b341561021e57600080fd5b61022661089c565b604051808215151515815260200191505060405180910390f35b341561024b57600080fd5b6102536108a5565b6040518082815260200191505060405180910390f35b341561027457600080fd5b6102c8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506108af565b005b34156102d557600080fd5b61030a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a7a565b6040518082815260200191505060405180910390f35b341561032b57600080fd5b610360600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a8e565b005b341561036d57600080fd5b6103836004808035906020019091905050610b76565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103d057600080fd5b6103e66004808035906020019091905050610b88565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042657808201518184015260208101905061040b565b50505050905090810190601f1680156104535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561046c57600080fd5b610498600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c43565b6040518082815260200191505060405180910390f35b34156104b957600080fd5b6104c1610c8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105015780820151818401526020810190506104e6565b50505050905090810190601f16801561052e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561054757600080fd5b61057c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d37565b005b341561058957600080fd5b610591610ebf565b6040518082815260200191505060405180910390f35b34156105b257600080fd5b6105de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ec5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610621578082015181840152602081019050610606565b505050509050019250505060405180910390f35b61063d611452565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b5050505050905090565b60006106e882610edd565b9050919050565b80600073ffffffffffffffffffffffffffffffffffffffff1661071182610b76565b73ffffffffffffffffffffffffffffffffffffffff161415151561073457600080fd5b61073d82610b76565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077657600080fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515156107b157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166107d283610edd565b73ffffffffffffffffffffffffffffffffffffffff161415806108225750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610897576108318383610f1a565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60006001905090565b6000600254905090565b80600073ffffffffffffffffffffffffffffffffffffffff166108d182610b76565b73ffffffffffffffffffffffffffffffffffffffff16141515156108f457600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610914836106dd565b73ffffffffffffffffffffffffffffffffffffffff1614151561093657600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1661095683610b76565b73ffffffffffffffffffffffffffffffffffffffff1614151561097857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156109b457600080fd5b6109bf848484610f70565b60008473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610a868383610f9c565b905092915050565b80600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610afd57600080fd5b610b078284610ffe565b610b118383611054565b610b27600160025461111b90919063ffffffff16565b600281905550818373ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688560405160405180910390a3505050565b6000610b8182611139565b9050919050565b610b90611452565b600560008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c375780601f10610c0c57610100808354040283529160200191610c37565b820191906000526020600020905b815481529060010190602001808311610c1a57829003601f168201915b50505050509050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b610c97611452565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d2d5780601f10610d0257610100808354040283529160200191610d2d565b820191906000526020600020905b815481529060010190602001808311610d1057829003601f168201915b5050505050905090565b80600073ffffffffffffffffffffffffffffffffffffffff16610d5982610b76565b73ffffffffffffffffffffffffffffffffffffffff1614151515610d7c57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610d9c83610b76565b73ffffffffffffffffffffffffffffffffffffffff16141515610dbe57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610dfa57600080fd5b610e05338484610f70565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b60025481565b610ecd611466565b610ed682611176565b9050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610f7981611213565b610f838382611269565b610f8d8183610ffe565b610f978282611054565b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610fea57fe5b906000526020600020900154905092915050565b806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816110a5919061147a565b9160005260206000209001600083909190915055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500360076000838152602001908152602001600020819055505050565b600080828401905083811015151561112f57fe5b8091505092915050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61117e611466565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561120757602002820191906000526020600020905b8154815260200190600101908083116111f3575b50505050509050919050565b60006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050925060076000858152602001908152602001600020549150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001840381548110151561131857fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561137357fe5b906000526020600020900181905550816007600083815260200190815260200160002081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156113e957fe5b906000526020600020900160009055600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361144a91906114a6565b505050505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116114a1578183600052602060002091820191016114a091906114d2565b5b505050565b8154818355818115116114cd578183600052602060002091820191016114cc91906114d2565b5b505050565b6114f491905b808211156114f05760008160009055506001016114d8565b5090565b905600a165627a7a723058202c2a095e159da83ec28e61e4144efec1dc496f4f2e5af44e3b888e7da3349cc70029",
  "deployedBytecode": "0x6060604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063081812fc1461016e578063095ea7b3146101d15780631051db341461021357806318160ddd1461024057806323b872dd146102695780632f745c59146102ca57806340c10f19146103205780636352211e146103625780636914db60146103c557806370a082311461046157806395d89b41146104ae578063a9059cbb1461053c578063af129dc21461057e578063d63d4af0146105a7575b600080fd5b34156100eb57600080fd5b6100f3610635565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610133578082015181840152602081019050610118565b50505050905090810190601f1680156101605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561017957600080fd5b61018f60048080359060200190919050506106dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101dc57600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106ef565b005b341561021e57600080fd5b61022661089c565b604051808215151515815260200191505060405180910390f35b341561024b57600080fd5b6102536108a5565b6040518082815260200191505060405180910390f35b341561027457600080fd5b6102c8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506108af565b005b34156102d557600080fd5b61030a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a7a565b6040518082815260200191505060405180910390f35b341561032b57600080fd5b610360600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a8e565b005b341561036d57600080fd5b6103836004808035906020019091905050610b76565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103d057600080fd5b6103e66004808035906020019091905050610b88565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042657808201518184015260208101905061040b565b50505050905090810190601f1680156104535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561046c57600080fd5b610498600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c43565b6040518082815260200191505060405180910390f35b34156104b957600080fd5b6104c1610c8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105015780820151818401526020810190506104e6565b50505050905090810190601f16801561052e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561054757600080fd5b61057c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d37565b005b341561058957600080fd5b610591610ebf565b6040518082815260200191505060405180910390f35b34156105b257600080fd5b6105de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ec5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610621578082015181840152602081019050610606565b505050509050019250505060405180910390f35b61063d611452565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b5050505050905090565b60006106e882610edd565b9050919050565b80600073ffffffffffffffffffffffffffffffffffffffff1661071182610b76565b73ffffffffffffffffffffffffffffffffffffffff161415151561073457600080fd5b61073d82610b76565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077657600080fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515156107b157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166107d283610edd565b73ffffffffffffffffffffffffffffffffffffffff161415806108225750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610897576108318383610f1a565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60006001905090565b6000600254905090565b80600073ffffffffffffffffffffffffffffffffffffffff166108d182610b76565b73ffffffffffffffffffffffffffffffffffffffff16141515156108f457600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610914836106dd565b73ffffffffffffffffffffffffffffffffffffffff1614151561093657600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1661095683610b76565b73ffffffffffffffffffffffffffffffffffffffff1614151561097857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156109b457600080fd5b6109bf848484610f70565b60008473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610a868383610f9c565b905092915050565b80600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610afd57600080fd5b610b078284610ffe565b610b118383611054565b610b27600160025461111b90919063ffffffff16565b600281905550818373ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688560405160405180910390a3505050565b6000610b8182611139565b9050919050565b610b90611452565b600560008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c375780601f10610c0c57610100808354040283529160200191610c37565b820191906000526020600020905b815481529060010190602001808311610c1a57829003601f168201915b50505050509050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b610c97611452565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d2d5780601f10610d0257610100808354040283529160200191610d2d565b820191906000526020600020905b815481529060010190602001808311610d1057829003601f168201915b5050505050905090565b80600073ffffffffffffffffffffffffffffffffffffffff16610d5982610b76565b73ffffffffffffffffffffffffffffffffffffffff1614151515610d7c57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610d9c83610b76565b73ffffffffffffffffffffffffffffffffffffffff16141515610dbe57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610dfa57600080fd5b610e05338484610f70565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b60025481565b610ecd611466565b610ed682611176565b9050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610f7981611213565b610f838382611269565b610f8d8183610ffe565b610f978282611054565b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610fea57fe5b906000526020600020900154905092915050565b806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816110a5919061147a565b9160005260206000209001600083909190915055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500360076000838152602001908152602001600020819055505050565b600080828401905083811015151561112f57fe5b8091505092915050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61117e611466565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561120757602002820191906000526020600020905b8154815260200190600101908083116111f3575b50505050509050919050565b60006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050925060076000858152602001908152602001600020549150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001840381548110151561131857fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561137357fe5b906000526020600020900181905550816007600083815260200190815260200160002081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156113e957fe5b906000526020600020900160009055600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361144a91906114a6565b505050505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116114a1578183600052602060002091820191016114a091906114d2565b5b505050565b8154818355818115116114cd578183600052602060002091820191016114cc91906114d2565b5b505050565b6114f491905b808211156114f05760008160009055506001016114d8565b5090565b905600a165627a7a723058202c2a095e159da83ec28e61e4144efec1dc496f4f2e5af44e3b888e7da3349cc70029",
  "sourceMap": "252:568:29:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "252:568:29:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1226:107:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3684:150:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:377;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3549:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1458:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2447:397;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3200:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;532:286:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1758:139:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:155;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1596:156:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2850:344:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;550:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3389:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1226:107:30;1287:12;;:::i;:::-;1322:4;1315:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1226:107;:::o;3684:150::-;3765:17;3805:22;3818:8;3805:12;:22::i;:::-;3798:29;;3684:150;;;:::o;2064:377::-;2148:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2194:17;2202:8;2194:7;:17::i;:::-;2180:31;;:10;:31;;;2172:40;;;;;;;;2244:3;2230:17;;:10;:17;;;;2222:26;;;;;;;;2297:1;2263:36;;:22;2276:8;2263:12;:22::i;:::-;:36;;;;:73;;;;2334:1;2319:17;;:3;:17;;;;2263:73;2259:176;;;2352:23;2361:3;2366:8;2352;:23::i;:::-;2410:3;2389:35;;2398:10;2389:35;;;2415:8;2389:35;;;;;;;;;;;;;;;;;;2259:176;2064:377;;;:::o;3549:129::-;3622:22;3667:4;3660:11;;3549:129;:::o;1458:132::-;1526:20;1569:14;;1562:21;;1458:132;:::o;2447:397::-;2551:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2608:10;2583:35;;:21;2595:8;2583:11;:21::i;:::-;:35;;;2575:44;;;;;;;;2658:5;2637:26;;:17;2645:8;2637:7;:17::i;:::-;:26;;;2629:35;;;;;;;;2697:1;2682:17;;:3;:17;;;;2674:26;;;;;;;;2711:47;2737:5;2744:3;2749:8;2711:25;:47::i;:::-;2785:1;2778:5;2769:28;;;2788:8;2769:28;;;;;;;;;;;;;;;;;;2823:3;2807:30;;2816:5;2807:30;;;2828:8;2807:30;;;;;;;;;;;;;;;;;;2447:397;;;;:::o;3200:183::-;3303:13;3339:37;3361:6;3369;3339:21;:37::i;:::-;3332:44;;3200:183;;;;:::o;532:286:29:-;624:8;505:1;469:38;;:14;:24;484:8;469:24;;;;;;;;;;;;;;;;;;;;;:38;;;461:47;;;;;;;;648:32;663:8;673:6;648:14;:32::i;:::-;690:39;712:6;720:8;690:21;:39::i;:::-;757:21;776:1;757:14;;:18;;:21;;;;:::i;:::-;740:14;:38;;;;802:8;794:6;789:22;;;;;;;;;;;;532:286;;;:::o;1758:139:30:-;1835:14;1872:18;1881:8;1872;:18::i;:::-;1865:25;;1758:139;;;:::o;1903:155::-;1986:15;;:::i;:::-;2024:17;:27;2042:8;2024:27;;;;;;;;;;;2017:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:155;;;:::o;1596:156::-;1676:13;1712:18;:26;1731:6;1712:26;;;;;;;;;;;;;;;:33;;;;1705:40;;1596:156;;;:::o;1339:113::-;1402:14;;:::i;:::-;1439:6;1432:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:113;:::o;2850:344::-;2935:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2988:10;2967:31;;:17;2975:8;2967:7;:17::i;:::-;:31;;;2959:40;;;;;;;;3032:1;3017:17;;:3;:17;;;;3009:26;;;;;;;;3046:52;3072:10;3084:3;3089:8;3046:25;:52::i;:::-;3130:1;3118:10;3109:33;;;3133:8;3109:33;;;;;;;;;;;;;;;;;;3173:3;3152:35;;3161:10;3152:35;;;3178:8;3152:35;;;;;;;;;;;;;;;;;;2850:344;;;:::o;550:26::-;;;;:::o;3389:154::-;3474:16;;:::i;:::-;3513:23;3529:6;3513:15;:23::i;:::-;3506:30;;3389:154;;;:::o;4413:165::-;4497:17;4537:24;:34;4562:8;4537:34;;;;;;;;;;;;;;;;;;;;;4530:41;;4413:165;;;:::o;4283:124::-;4397:3;4360:24;:34;4385:8;4360:34;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;4283:124;;:::o;3840:283::-;3949:29;3969:8;3949:19;:29::i;:::-;3988:43;4015:5;4022:8;3988:26;:43::i;:::-;4041:29;4056:8;4066:3;4041:14;:29::i;:::-;4080:36;4102:3;4107:8;4080:21;:36::i;:::-;3840:283;;;:::o;4748:183::-;4855:12;4890:18;:26;4909:6;4890:26;;;;;;;;;;;;;;;4917:6;4890:34;;;;;;;;;;;;;;;;;;;4883:41;;4748:183;;;;:::o;5072:126::-;5185:6;5158:14;:24;5173:8;5158:24;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;5072:126;;:::o;5204:237::-;5297:18;:26;5316:6;5297:26;;;;;;;;;;;;;;;:41;;;;;;;;;;;:::i;:::-;;;;;;;;;;5329:8;5297:41;;;;;;;5433:1;5397:18;:26;5416:6;5397:26;;;;;;;;;;;;;;;:33;;;;:37;5348:24;:34;5373:8;5348:34;;;;;;;;;;;:86;;;;5204:237;;:::o;1008:129:32:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;4129:148:30:-;4209:14;4246;:24;4261:8;4246:24;;;;;;;;;;;;;;;;;;;;;4239:31;;4129:148;;;:::o;4584:158::-;4672:14;;:::i;:::-;4709:18;:26;4728:6;4709:26;;;;;;;;;;;;;;;4702:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4584:158;;;:::o;4937:129::-;5057:1;5012:24;:34;5037:8;5012:34;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;4937:129;:::o;5447:484::-;5545:11;5602:10;5659:14;5559:18;:26;5578:6;5559:26;;;;;;;;;;;;;;;:33;;;;5545:47;;5615:24;:34;5640:8;5615:34;;;;;;;;;;;;5602:47;;5676:18;:26;5695:6;5676:26;;;;;;;;;;;;;;;5712:1;5703:6;:10;5676:38;;;;;;;;;;;;;;;;;;;5659:55;;5761:9;5725:18;:26;5744:6;5725:26;;;;;;;;;;;;;;;5752:5;5725:33;;;;;;;;;;;;;;;;;;:45;;;;5818:5;5780:24;:35;5805:9;5780:35;;;;;;;;;;;:43;;;;5841:18;:26;5860:6;5841:26;;;;;;;;;;;;;;;5877:1;5868:6;:10;5841:38;;;;;;;;;;;;;;;;;;5834:45;;;5889:18;:26;5908:6;5889:26;;;;;;;;;;;;;;;:35;;;;;;;;;;;;:::i;:::-;;5447:484;;;;;:::o;252:568:29:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"./NonFungibleToken.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\n/**\n * @title MintableNonFungibleToken\n *\n * Superset of the ERC721 standard that allows for the minting\n * of non-fungible tokens.\n */\ncontract MintableNonFungibleToken is NonFungibleToken {\n    using SafeMath for uint;\n\n    event Mint(address indexed _to, uint256 indexed _tokenId);\n\n    modifier onlyNonexistentToken(uint _tokenId) {\n        require(tokenIdToOwner[_tokenId] == address(0));\n        _;\n    }\n\n    function mint(address _owner, uint256 _tokenId)\n        public\n        onlyNonexistentToken(_tokenId)\n    {\n        _setTokenOwner(_tokenId, _owner);\n        _addTokenToOwnersList(_owner, _tokenId);\n\n        numTokensTotal = numTokensTotal.add(1);\n\n        Mint(_owner, _tokenId);\n    }\n}\n",
  "sourcePath": "NonFungibleToken/contracts/MintableNonFungibleToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/MintableNonFungibleToken.sol",
      "exportedSymbols": {
        "MintableNonFungibleToken": [
          7072
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 7009,
        "name": "PragmaDirective",
        "src": "0:23:29"
      },
      {
        "attributes": {
          "SourceUnit": 7630,
          "absolutePath": "NonFungibleToken/contracts/NonFungibleToken.sol",
          "file": "./NonFungibleToken.sol",
          "scope": 7073,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7010,
        "name": "ImportDirective",
        "src": "25:32:29"
      },
      {
        "attributes": {
          "SourceUnit": 7788,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 7073,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7011,
        "name": "ImportDirective",
        "src": "58:55:29"
      },
      {
        "attributes": {
          "contractDependencies": [
            6934,
            7007,
            7629
          ],
          "contractKind": "contract",
          "documentation": "@title MintableNonFungibleToken\n * Superset of the ERC721 standard that allows for the minting\nof non-fungible tokens.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7072,
            7629,
            6934,
            7007
          ],
          "name": "MintableNonFungibleToken",
          "scope": 7073
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "NonFungibleToken",
                  "referencedDeclaration": 7629,
                  "type": "contract NonFungibleToken"
                },
                "id": 7012,
                "name": "UserDefinedTypeName",
                "src": "289:16:29"
              }
            ],
            "id": 7013,
            "name": "InheritanceSpecifier",
            "src": "289:16:29"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 7787,
                  "type": "library SafeMath"
                },
                "id": 7014,
                "name": "UserDefinedTypeName",
                "src": "318:8:29"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 7015,
                "name": "ElementaryTypeName",
                "src": "331:4:29"
              }
            ],
            "id": 7016,
            "name": "UsingForDirective",
            "src": "312:24:29"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Mint"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 7022,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 7017,
                        "name": "ElementaryTypeName",
                        "src": "353:7:29"
                      }
                    ],
                    "id": 7018,
                    "name": "VariableDeclaration",
                    "src": "353:19:29"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_tokenId",
                      "scope": 7022,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7019,
                        "name": "ElementaryTypeName",
                        "src": "374:7:29"
                      }
                    ],
                    "id": 7020,
                    "name": "VariableDeclaration",
                    "src": "374:24:29"
                  }
                ],
                "id": 7021,
                "name": "ParameterList",
                "src": "352:47:29"
              }
            ],
            "id": 7022,
            "name": "EventDefinition",
            "src": "342:58:29"
          },
          {
            "attributes": {
              "name": "onlyNonexistentToken",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7038,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 7023,
                        "name": "ElementaryTypeName",
                        "src": "436:4:29"
                      }
                    ],
                    "id": 7024,
                    "name": "VariableDeclaration",
                    "src": "436:13:29"
                  }
                ],
                "id": 7025,
                "name": "ParameterList",
                "src": "435:15:29"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7026,
                            "name": "Identifier",
                            "src": "461:7:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7087,
                                      "type": "mapping(uint256 => address)",
                                      "value": "tokenIdToOwner"
                                    },
                                    "id": 7027,
                                    "name": "Identifier",
                                    "src": "469:14:29"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7024,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7028,
                                    "name": "Identifier",
                                    "src": "484:8:29"
                                  }
                                ],
                                "id": 7029,
                                "name": "IndexAccess",
                                "src": "469:24:29"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 7030,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "497:7:29"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 7031,
                                    "name": "Literal",
                                    "src": "505:1:29"
                                  }
                                ],
                                "id": 7032,
                                "name": "FunctionCall",
                                "src": "497:10:29"
                              }
                            ],
                            "id": 7033,
                            "name": "BinaryOperation",
                            "src": "469:38:29"
                          }
                        ],
                        "id": 7034,
                        "name": "FunctionCall",
                        "src": "461:47:29"
                      }
                    ],
                    "id": 7035,
                    "name": "ExpressionStatement",
                    "src": "461:47:29"
                  },
                  {
                    "id": 7036,
                    "name": "PlaceholderStatement",
                    "src": "518:1:29"
                  }
                ],
                "id": 7037,
                "name": "Block",
                "src": "451:75:29"
              }
            ],
            "id": 7038,
            "name": "ModifierDefinition",
            "src": "406:120:29"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "mint",
              "payable": false,
              "scope": 7072,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7071,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 7039,
                        "name": "ElementaryTypeName",
                        "src": "546:7:29"
                      }
                    ],
                    "id": 7040,
                    "name": "VariableDeclaration",
                    "src": "546:14:29"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7071,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7041,
                        "name": "ElementaryTypeName",
                        "src": "562:7:29"
                      }
                    ],
                    "id": 7042,
                    "name": "VariableDeclaration",
                    "src": "562:16:29"
                  }
                ],
                "id": 7043,
                "name": "ParameterList",
                "src": "545:34:29"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7047,
                "name": "ParameterList",
                "src": "638:0:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7038,
                      "type": "modifier (uint256)",
                      "value": "onlyNonexistentToken"
                    },
                    "id": 7044,
                    "name": "Identifier",
                    "src": "603:20:29"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7042,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 7045,
                    "name": "Identifier",
                    "src": "624:8:29"
                  }
                ],
                "id": 7046,
                "name": "ModifierInvocation",
                "src": "603:30:29"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7528,
                              "type": "function (uint256,address)",
                              "value": "_setTokenOwner"
                            },
                            "id": 7048,
                            "name": "Identifier",
                            "src": "648:14:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7042,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7049,
                            "name": "Identifier",
                            "src": "663:8:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7040,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7050,
                            "name": "Identifier",
                            "src": "673:6:29"
                          }
                        ],
                        "id": 7051,
                        "name": "FunctionCall",
                        "src": "648:32:29"
                      }
                    ],
                    "id": 7052,
                    "name": "ExpressionStatement",
                    "src": "648:32:29"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7554,
                              "type": "function (address,uint256)",
                              "value": "_addTokenToOwnersList"
                            },
                            "id": 7053,
                            "name": "Identifier",
                            "src": "690:21:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7040,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7054,
                            "name": "Identifier",
                            "src": "712:6:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7042,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7055,
                            "name": "Identifier",
                            "src": "720:8:29"
                          }
                        ],
                        "id": 7056,
                        "name": "FunctionCall",
                        "src": "690:39:29"
                      }
                    ],
                    "id": 7057,
                    "name": "ExpressionStatement",
                    "src": "690:39:29"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7083,
                              "type": "uint256",
                              "value": "numTokensTotal"
                            },
                            "id": 7058,
                            "name": "Identifier",
                            "src": "740:14:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 7786,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7083,
                                      "type": "uint256",
                                      "value": "numTokensTotal"
                                    },
                                    "id": 7059,
                                    "name": "Identifier",
                                    "src": "757:14:29"
                                  }
                                ],
                                "id": 7060,
                                "name": "MemberAccess",
                                "src": "757:18:29"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 7061,
                                "name": "Literal",
                                "src": "776:1:29"
                              }
                            ],
                            "id": 7062,
                            "name": "FunctionCall",
                            "src": "757:21:29"
                          }
                        ],
                        "id": 7063,
                        "name": "Assignment",
                        "src": "740:38:29"
                      }
                    ],
                    "id": 7064,
                    "name": "ExpressionStatement",
                    "src": "740:38:29"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7022,
                              "type": "function (address,uint256)",
                              "value": "Mint"
                            },
                            "id": 7065,
                            "name": "Identifier",
                            "src": "789:4:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7040,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7066,
                            "name": "Identifier",
                            "src": "794:6:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7042,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7067,
                            "name": "Identifier",
                            "src": "802:8:29"
                          }
                        ],
                        "id": 7068,
                        "name": "FunctionCall",
                        "src": "789:22:29"
                      }
                    ],
                    "id": 7069,
                    "name": "ExpressionStatement",
                    "src": "789:22:29"
                  }
                ],
                "id": 7070,
                "name": "Block",
                "src": "638:180:29"
              }
            ],
            "id": 7071,
            "name": "FunctionDefinition",
            "src": "532:286:29"
          }
        ],
        "id": 7072,
        "name": "ContractDefinition",
        "src": "252:568:29"
      }
    ],
    "id": 7073,
    "name": "SourceUnit",
    "src": "0:821:29"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x42cadef3f6acccf485a01ceaa3945fbd55d3ac53"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x401631f04c323d127a12cdb377216f7d3b252ed0"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T04:42:11.031Z"
}