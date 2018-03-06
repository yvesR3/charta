export const ERC721 = 
{
  "contractName": "ERC721",
  "abi": [
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity 0.4.18;\n\n\n/**\n * Interface for required functionality in the ERC721 standard\n * for non-fungible tokens.\n *\n * Author: Nadav Hollander (nadav at dharma.io)\n */\ncontract ERC721 {\n    // Function\n    function totalSupply() public view returns (uint256 _totalSupply);\n    function balanceOf(address _owner) public view returns (uint256 _balance);\n    function ownerOf(uint _tokenId) public view returns (address _owner);\n    function approve(address _to, uint _tokenId) public;\n    function getApproved(uint _tokenId) public view returns (address _approved);\n    function transferFrom(address _from, address _to, uint _tokenId) public;\n    function transfer(address _to, uint _tokenId) public;\n    function implementsERC721() public view returns (bool _implementsERC721);\n\n    // Events\n    event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n    event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n}\n",
  "sourcePath": "NonFungibleToken/contracts/ERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/ERC721.sol",
      "exportedSymbols": {
        "ERC721": [
          7007
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
        "id": 6936,
        "name": "PragmaDirective",
        "src": "0:23:28"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "Interface for required functionality in the ERC721 standard\nfor non-fungible tokens.\n * Author: Nadav Hollander (nadav at dharma.io)",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            7007
          ],
          "name": "ERC721",
          "scope": 7008
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 7007,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6937,
                "name": "ParameterList",
                "src": "234:2:28"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_totalSupply",
                      "scope": 6941,
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
                        "id": 6938,
                        "name": "ElementaryTypeName",
                        "src": "258:7:28"
                      }
                    ],
                    "id": 6939,
                    "name": "VariableDeclaration",
                    "src": "258:20:28"
                  }
                ],
                "id": 6940,
                "name": "ParameterList",
                "src": "257:22:28"
              }
            ],
            "id": 6941,
            "name": "FunctionDefinition",
            "src": "214:66:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 7007,
              "stateMutability": "view",
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
                      "scope": 6948,
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
                        "id": 6942,
                        "name": "ElementaryTypeName",
                        "src": "304:7:28"
                      }
                    ],
                    "id": 6943,
                    "name": "VariableDeclaration",
                    "src": "304:14:28"
                  }
                ],
                "id": 6944,
                "name": "ParameterList",
                "src": "303:16:28"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 6948,
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
                        "id": 6945,
                        "name": "ElementaryTypeName",
                        "src": "341:7:28"
                      }
                    ],
                    "id": 6946,
                    "name": "VariableDeclaration",
                    "src": "341:16:28"
                  }
                ],
                "id": 6947,
                "name": "ParameterList",
                "src": "340:18:28"
              }
            ],
            "id": 6948,
            "name": "FunctionDefinition",
            "src": "285:74:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 7007,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 6955,
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
                        "id": 6949,
                        "name": "ElementaryTypeName",
                        "src": "381:4:28"
                      }
                    ],
                    "id": 6950,
                    "name": "VariableDeclaration",
                    "src": "381:13:28"
                  }
                ],
                "id": 6951,
                "name": "ParameterList",
                "src": "380:15:28"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 6955,
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
                        "id": 6952,
                        "name": "ElementaryTypeName",
                        "src": "417:7:28"
                      }
                    ],
                    "id": 6953,
                    "name": "VariableDeclaration",
                    "src": "417:14:28"
                  }
                ],
                "id": 6954,
                "name": "ParameterList",
                "src": "416:16:28"
              }
            ],
            "id": 6955,
            "name": "FunctionDefinition",
            "src": "364:69:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 7007,
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
                      "name": "_to",
                      "scope": 6962,
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
                        "id": 6956,
                        "name": "ElementaryTypeName",
                        "src": "455:7:28"
                      }
                    ],
                    "id": 6957,
                    "name": "VariableDeclaration",
                    "src": "455:11:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 6962,
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
                        "id": 6958,
                        "name": "ElementaryTypeName",
                        "src": "468:4:28"
                      }
                    ],
                    "id": 6959,
                    "name": "VariableDeclaration",
                    "src": "468:13:28"
                  }
                ],
                "id": 6960,
                "name": "ParameterList",
                "src": "454:28:28"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6961,
                "name": "ParameterList",
                "src": "489:0:28"
              }
            ],
            "id": 6962,
            "name": "FunctionDefinition",
            "src": "438:52:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 7007,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 6969,
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
                        "id": 6963,
                        "name": "ElementaryTypeName",
                        "src": "516:4:28"
                      }
                    ],
                    "id": 6964,
                    "name": "VariableDeclaration",
                    "src": "516:13:28"
                  }
                ],
                "id": 6965,
                "name": "ParameterList",
                "src": "515:15:28"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 6969,
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
                        "id": 6966,
                        "name": "ElementaryTypeName",
                        "src": "552:7:28"
                      }
                    ],
                    "id": 6967,
                    "name": "VariableDeclaration",
                    "src": "552:17:28"
                  }
                ],
                "id": 6968,
                "name": "ParameterList",
                "src": "551:19:28"
              }
            ],
            "id": 6969,
            "name": "FunctionDefinition",
            "src": "495:76:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 7007,
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
                      "name": "_from",
                      "scope": 6978,
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
                        "id": 6970,
                        "name": "ElementaryTypeName",
                        "src": "598:7:28"
                      }
                    ],
                    "id": 6971,
                    "name": "VariableDeclaration",
                    "src": "598:13:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 6978,
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
                        "id": 6972,
                        "name": "ElementaryTypeName",
                        "src": "613:7:28"
                      }
                    ],
                    "id": 6973,
                    "name": "VariableDeclaration",
                    "src": "613:11:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 6978,
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
                        "id": 6974,
                        "name": "ElementaryTypeName",
                        "src": "626:4:28"
                      }
                    ],
                    "id": 6975,
                    "name": "VariableDeclaration",
                    "src": "626:13:28"
                  }
                ],
                "id": 6976,
                "name": "ParameterList",
                "src": "597:43:28"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6977,
                "name": "ParameterList",
                "src": "647:0:28"
              }
            ],
            "id": 6978,
            "name": "FunctionDefinition",
            "src": "576:72:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 7007,
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
                      "name": "_to",
                      "scope": 6985,
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
                        "id": 6979,
                        "name": "ElementaryTypeName",
                        "src": "671:7:28"
                      }
                    ],
                    "id": 6980,
                    "name": "VariableDeclaration",
                    "src": "671:11:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 6985,
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
                        "id": 6981,
                        "name": "ElementaryTypeName",
                        "src": "684:4:28"
                      }
                    ],
                    "id": 6982,
                    "name": "VariableDeclaration",
                    "src": "684:13:28"
                  }
                ],
                "id": 6983,
                "name": "ParameterList",
                "src": "670:28:28"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6984,
                "name": "ParameterList",
                "src": "705:0:28"
              }
            ],
            "id": 6985,
            "name": "FunctionDefinition",
            "src": "653:53:28"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "implementsERC721",
              "payable": false,
              "scope": 7007,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6986,
                "name": "ParameterList",
                "src": "736:2:28"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_implementsERC721",
                      "scope": 6990,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 6987,
                        "name": "ElementaryTypeName",
                        "src": "760:4:28"
                      }
                    ],
                    "id": 6988,
                    "name": "VariableDeclaration",
                    "src": "760:22:28"
                  }
                ],
                "id": 6989,
                "name": "ParameterList",
                "src": "759:24:28"
              }
            ],
            "id": 6990,
            "name": "FunctionDefinition",
            "src": "711:73:28"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 6998,
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
                        "id": 6991,
                        "name": "ElementaryTypeName",
                        "src": "819:7:28"
                      }
                    ],
                    "id": 6992,
                    "name": "VariableDeclaration",
                    "src": "819:21:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 6998,
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
                        "id": 6993,
                        "name": "ElementaryTypeName",
                        "src": "842:7:28"
                      }
                    ],
                    "id": 6994,
                    "name": "VariableDeclaration",
                    "src": "842:19:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 6998,
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
                        "id": 6995,
                        "name": "ElementaryTypeName",
                        "src": "863:7:28"
                      }
                    ],
                    "id": 6996,
                    "name": "VariableDeclaration",
                    "src": "863:16:28"
                  }
                ],
                "id": 6997,
                "name": "ParameterList",
                "src": "818:62:28"
              }
            ],
            "id": 6998,
            "name": "EventDefinition",
            "src": "804:77:28"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 7006,
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
                        "id": 6999,
                        "name": "ElementaryTypeName",
                        "src": "901:7:28"
                      }
                    ],
                    "id": 7000,
                    "name": "VariableDeclaration",
                    "src": "901:22:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 7006,
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
                        "id": 7001,
                        "name": "ElementaryTypeName",
                        "src": "925:7:28"
                      }
                    ],
                    "id": 7002,
                    "name": "VariableDeclaration",
                    "src": "925:25:28"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 7006,
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
                        "id": 7003,
                        "name": "ElementaryTypeName",
                        "src": "952:7:28"
                      }
                    ],
                    "id": 7004,
                    "name": "VariableDeclaration",
                    "src": "952:16:28"
                  }
                ],
                "id": 7005,
                "name": "ParameterList",
                "src": "900:69:28"
              }
            ],
            "id": 7006,
            "name": "EventDefinition",
            "src": "886:84:28"
          }
        ],
        "id": 7007,
        "name": "ContractDefinition",
        "src": "176:796:28"
      }
    ],
    "id": 7008,
    "name": "SourceUnit",
    "src": "0:973:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.359Z"
}