export const DetailedERC721 = 
{
  "contractName": "DetailedERC721",
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
  "source": "pragma solidity 0.4.18;\n\nimport \"./ERC721.sol\";\n\n\n/**\n * Interface for optional functionality in the ERC721 standard\n * for non-fungible tokens.\n *\n * Author: Nadav Hollander (nadav at dharma.io)\n */\ncontract DetailedERC721 is ERC721 {\n    function name() public view returns (string _name);\n    function symbol() public view returns (string _symbol);\n    function tokenMetadata(uint _tokenId) public view returns (string _infoUrl);\n    function tokenOfOwnerByIndex(address _owner, uint _index) public view returns (uint _tokenId);\n}\n",
  "sourcePath": "NonFungibleToken/contracts/DetailedERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/DetailedERC721.sol",
      "exportedSymbols": {
        "DetailedERC721": [
          6934
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
        "id": 6904,
        "name": "PragmaDirective",
        "src": "0:23:27"
      },
      {
        "attributes": {
          "SourceUnit": 7008,
          "absolutePath": "NonFungibleToken/contracts/ERC721.sol",
          "file": "./ERC721.sol",
          "scope": 6935,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 6905,
        "name": "ImportDirective",
        "src": "25:22:27"
      },
      {
        "attributes": {
          "contractDependencies": [
            7007
          ],
          "contractKind": "contract",
          "documentation": "Interface for optional functionality in the ERC721 standard\nfor non-fungible tokens.\n * Author: Nadav Hollander (nadav at dharma.io)",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            6934,
            7007
          ],
          "name": "DetailedERC721",
          "scope": 6935
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
                  "name": "ERC721",
                  "referencedDeclaration": 7007,
                  "type": "contract ERC721"
                },
                "id": 6906,
                "name": "UserDefinedTypeName",
                "src": "227:6:27"
              }
            ],
            "id": 6907,
            "name": "InheritanceSpecifier",
            "src": "227:6:27"
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
              "name": "name",
              "payable": false,
              "scope": 6934,
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
                "id": 6908,
                "name": "ParameterList",
                "src": "253:2:27"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 6912,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 6909,
                        "name": "ElementaryTypeName",
                        "src": "277:6:27"
                      }
                    ],
                    "id": 6910,
                    "name": "VariableDeclaration",
                    "src": "277:12:27"
                  }
                ],
                "id": 6911,
                "name": "ParameterList",
                "src": "276:14:27"
              }
            ],
            "id": 6912,
            "name": "FunctionDefinition",
            "src": "240:51:27"
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
              "name": "symbol",
              "payable": false,
              "scope": 6934,
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
                "id": 6913,
                "name": "ParameterList",
                "src": "311:2:27"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 6917,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 6914,
                        "name": "ElementaryTypeName",
                        "src": "335:6:27"
                      }
                    ],
                    "id": 6915,
                    "name": "VariableDeclaration",
                    "src": "335:14:27"
                  }
                ],
                "id": 6916,
                "name": "ParameterList",
                "src": "334:16:27"
              }
            ],
            "id": 6917,
            "name": "FunctionDefinition",
            "src": "296:55:27"
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
              "name": "tokenMetadata",
              "payable": false,
              "scope": 6934,
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
                      "scope": 6924,
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
                        "id": 6918,
                        "name": "ElementaryTypeName",
                        "src": "379:4:27"
                      }
                    ],
                    "id": 6919,
                    "name": "VariableDeclaration",
                    "src": "379:13:27"
                  }
                ],
                "id": 6920,
                "name": "ParameterList",
                "src": "378:15:27"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_infoUrl",
                      "scope": 6924,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 6921,
                        "name": "ElementaryTypeName",
                        "src": "415:6:27"
                      }
                    ],
                    "id": 6922,
                    "name": "VariableDeclaration",
                    "src": "415:15:27"
                  }
                ],
                "id": 6923,
                "name": "ParameterList",
                "src": "414:17:27"
              }
            ],
            "id": 6924,
            "name": "FunctionDefinition",
            "src": "356:76:27"
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
              "name": "tokenOfOwnerByIndex",
              "payable": false,
              "scope": 6934,
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
                      "scope": 6933,
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
                        "id": 6925,
                        "name": "ElementaryTypeName",
                        "src": "466:7:27"
                      }
                    ],
                    "id": 6926,
                    "name": "VariableDeclaration",
                    "src": "466:14:27"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 6933,
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
                        "id": 6927,
                        "name": "ElementaryTypeName",
                        "src": "482:4:27"
                      }
                    ],
                    "id": 6928,
                    "name": "VariableDeclaration",
                    "src": "482:11:27"
                  }
                ],
                "id": 6929,
                "name": "ParameterList",
                "src": "465:29:27"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 6933,
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
                        "id": 6930,
                        "name": "ElementaryTypeName",
                        "src": "516:4:27"
                      }
                    ],
                    "id": 6931,
                    "name": "VariableDeclaration",
                    "src": "516:13:27"
                  }
                ],
                "id": 6932,
                "name": "ParameterList",
                "src": "515:15:27"
              }
            ],
            "id": 6933,
            "name": "FunctionDefinition",
            "src": "437:94:27"
          }
        ],
        "id": 6934,
        "name": "ContractDefinition",
        "src": "200:333:27"
      }
    ],
    "id": 6935,
    "name": "SourceUnit",
    "src": "0:534:27"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.359Z"
}