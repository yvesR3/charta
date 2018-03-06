export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
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
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          5361
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
        "id": 5178,
        "name": "PragmaDirective",
        "src": "584:23:18"
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
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5361
          ],
          "name": "MockContract",
          "scope": 5362
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 5361,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 5179,
                "name": "ElementaryTypeName",
                "src": "638:7:18"
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
                  "type": "bytes32",
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
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 5180,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:18"
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
                    "id": 5181,
                    "name": "Literal",
                    "src": "697:1:18"
                  }
                ],
                "id": 5182,
                "name": "FunctionCall",
                "src": "689:10:18"
              }
            ],
            "id": 5183,
            "name": "VariableDeclaration",
            "src": "638:61:18"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 5361,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 5184,
                    "name": "ElementaryTypeName",
                    "src": "804:6:18"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5185,
                        "name": "ElementaryTypeName",
                        "src": "814:7:18"
                      }
                    ],
                    "id": 5186,
                    "name": "ArrayTypeName",
                    "src": "814:9:18"
                  }
                ],
                "id": 5187,
                "name": "Mapping",
                "src": "795:29:18"
              }
            ],
            "id": 5188,
            "name": "VariableDeclaration",
            "src": "795:61:18"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 5361,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 5189,
                    "name": "ElementaryTypeName",
                    "src": "871:6:18"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5190,
                        "name": "ElementaryTypeName",
                        "src": "890:7:18"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5191,
                        "name": "ElementaryTypeName",
                        "src": "901:7:18"
                      }
                    ],
                    "id": 5192,
                    "name": "Mapping",
                    "src": "881:28:18"
                  }
                ],
                "id": 5193,
                "name": "Mapping",
                "src": "862:48:18"
              }
            ],
            "id": 5194,
            "name": "VariableDeclaration",
            "src": "862:75:18"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 5361,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 5195,
                    "name": "ElementaryTypeName",
                    "src": "952:6:18"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5196,
                        "name": "ElementaryTypeName",
                        "src": "971:7:18"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5197,
                        "name": "ElementaryTypeName",
                        "src": "982:4:18"
                      }
                    ],
                    "id": 5198,
                    "name": "Mapping",
                    "src": "962:25:18"
                  }
                ],
                "id": 5199,
                "name": "Mapping",
                "src": "943:45:18"
              }
            ],
            "id": 5200,
            "name": "VariableDeclaration",
            "src": "943:68:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 5361,
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
                      "name": "functionName",
                      "scope": 5225,
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
                        "id": 5201,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:18"
                      }
                    ],
                    "id": 5202,
                    "name": "VariableDeclaration",
                    "src": "1052:19:18"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5225,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5203,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:18"
                      }
                    ],
                    "id": 5204,
                    "name": "VariableDeclaration",
                    "src": "1081:21:18"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 5225,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5205,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:18"
                      }
                    ],
                    "id": 5206,
                    "name": "VariableDeclaration",
                    "src": "1112:19:18"
                  }
                ],
                "id": 5207,
                "name": "ParameterList",
                "src": "1042:95:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5208,
                "name": "ParameterList",
                "src": "1145:0:18"
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5188,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5209,
                                    "name": "Identifier",
                                    "src": "1155:22:18"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5202,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5210,
                                    "name": "Identifier",
                                    "src": "1178:12:18"
                                  }
                                ],
                                "id": 5211,
                                "name": "IndexAccess",
                                "src": "1155:36:18"
                              }
                            ],
                            "id": 5212,
                            "name": "MemberAccess",
                            "src": "1155:41:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5204,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5213,
                            "name": "Identifier",
                            "src": "1197:13:18"
                          }
                        ],
                        "id": 5214,
                        "name": "FunctionCall",
                        "src": "1155:56:18"
                      }
                    ],
                    "id": 5215,
                    "name": "ExpressionStatement",
                    "src": "1155:56:18"
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
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5194,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 5216,
                                    "name": "Identifier",
                                    "src": "1221:17:18"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5202,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5217,
                                    "name": "Identifier",
                                    "src": "1239:12:18"
                                  }
                                ],
                                "id": 5219,
                                "name": "IndexAccess",
                                "src": "1221:31:18"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5204,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 5218,
                                "name": "Identifier",
                                "src": "1253:13:18"
                              }
                            ],
                            "id": 5220,
                            "name": "IndexAccess",
                            "src": "1221:46:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5206,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 5221,
                            "name": "Identifier",
                            "src": "1270:11:18"
                          }
                        ],
                        "id": 5222,
                        "name": "Assignment",
                        "src": "1221:60:18"
                      }
                    ],
                    "id": 5223,
                    "name": "ExpressionStatement",
                    "src": "1221:60:18"
                  }
                ],
                "id": 5224,
                "name": "Block",
                "src": "1145:143:18"
              }
            ],
            "id": 5225,
            "name": "FunctionDefinition",
            "src": "1018:270:18"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 5361,
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
                      "name": "functionName",
                      "scope": 5241,
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
                        "id": 5226,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:18"
                      }
                    ],
                    "id": 5227,
                    "name": "VariableDeclaration",
                    "src": "1322:19:18"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5241,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5228,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:18"
                      }
                    ],
                    "id": 5229,
                    "name": "VariableDeclaration",
                    "src": "1343:21:18"
                  }
                ],
                "id": 5230,
                "name": "ParameterList",
                "src": "1321:44:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 5241,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5231,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:18"
                      }
                    ],
                    "id": 5232,
                    "name": "VariableDeclaration",
                    "src": "1411:24:18"
                  }
                ],
                "id": 5233,
                "name": "ParameterList",
                "src": "1410:26:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5233
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5194,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 5234,
                                "name": "Identifier",
                                "src": "1458:17:18"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5227,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5235,
                                "name": "Identifier",
                                "src": "1476:12:18"
                              }
                            ],
                            "id": 5236,
                            "name": "IndexAccess",
                            "src": "1458:31:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5229,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5237,
                            "name": "Identifier",
                            "src": "1490:13:18"
                          }
                        ],
                        "id": 5238,
                        "name": "IndexAccess",
                        "src": "1458:46:18"
                      }
                    ],
                    "id": 5239,
                    "name": "Return",
                    "src": "1451:53:18"
                  }
                ],
                "id": 5240,
                "name": "Block",
                "src": "1441:70:18"
              }
            ],
            "id": 5241,
            "name": "FunctionDefinition",
            "src": "1294:217:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 5361,
              "stateMutability": "nonpayable",
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
                "id": 5242,
                "name": "ParameterList",
                "src": "1531:2:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5243,
                "name": "ParameterList",
                "src": "1541:0:18"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            5245
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 5314,
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
                                "id": 5244,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:18"
                              }
                            ],
                            "id": 5245,
                            "name": "VariableDeclaration",
                            "src": "1556:6:18"
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
                            "id": 5246,
                            "name": "Literal",
                            "src": "1565:1:18"
                          }
                        ],
                        "id": 5247,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:18"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5245,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 5248,
                            "name": "Identifier",
                            "src": "1568:1:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 5249,
                            "name": "Literal",
                            "src": "1572:2:18"
                          }
                        ],
                        "id": 5250,
                        "name": "BinaryOperation",
                        "src": "1568:6:18"
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
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5245,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 5251,
                                "name": "Identifier",
                                "src": "1576:1:18"
                              }
                            ],
                            "id": 5252,
                            "name": "UnaryOperation",
                            "src": "1576:3:18"
                          }
                        ],
                        "id": 5253,
                        "name": "ExpressionStatement",
                        "src": "1576:3:18"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                5255
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 5314,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
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
                                    "id": 5254,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:18"
                                  }
                                ],
                                "id": 5255,
                                "name": "VariableDeclaration",
                                "src": "1595:26:18"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "string memory[10] memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5360,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 5256,
                                        "name": "Identifier",
                                        "src": "1624:15:18"
                                      }
                                    ],
                                    "id": 5257,
                                    "name": "FunctionCall",
                                    "src": "1624:17:18"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5245,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 5258,
                                    "name": "Identifier",
                                    "src": "1642:1:18"
                                  }
                                ],
                                "id": 5259,
                                "name": "IndexAccess",
                                "src": "1624:20:18"
                              }
                            ],
                            "id": 5260,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:18"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
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
                                          "type": "bytes memory",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 5261,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:18"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5255,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 5262,
                                            "name": "Identifier",
                                            "src": "1669:12:18"
                                          }
                                        ],
                                        "id": 5263,
                                        "name": "FunctionCall",
                                        "src": "1663:19:18"
                                      }
                                    ],
                                    "id": 5264,
                                    "name": "MemberAccess",
                                    "src": "1663:26:18"
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
                                    "id": 5265,
                                    "name": "Literal",
                                    "src": "1693:1:18"
                                  }
                                ],
                                "id": 5266,
                                "name": "BinaryOperation",
                                "src": "1663:31:18"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            5268
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 5314,
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
                                                "id": 5267,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:18"
                                              }
                                            ],
                                            "id": 5268,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:18"
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
                                            "id": 5269,
                                            "name": "Literal",
                                            "src": "1728:1:18"
                                          }
                                        ],
                                        "id": 5270,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:18"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "<",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5268,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 5271,
                                            "name": "Identifier",
                                            "src": "1731:1:18"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "length",
                                              "referencedDeclaration": null,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5188,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 5272,
                                                    "name": "Identifier",
                                                    "src": "1735:22:18"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5255,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 5273,
                                                    "name": "Identifier",
                                                    "src": "1758:12:18"
                                                  }
                                                ],
                                                "id": 5274,
                                                "name": "IndexAccess",
                                                "src": "1735:36:18"
                                              }
                                            ],
                                            "id": 5275,
                                            "name": "MemberAccess",
                                            "src": "1735:43:18"
                                          }
                                        ],
                                        "id": 5276,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:18"
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
                                              "operator": "++",
                                              "prefix": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5268,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 5277,
                                                "name": "Identifier",
                                                "src": "1780:1:18"
                                              }
                                            ],
                                            "id": 5278,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:18"
                                          }
                                        ],
                                        "id": 5279,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:18"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                5281
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 5314,
                                                  "stateVariable": false,
                                                  "storageLocation": "default",
                                                  "type": "bytes32",
                                                  "value": null,
                                                  "visibility": "internal"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "name": "bytes32",
                                                      "type": "bytes32"
                                                    },
                                                    "id": 5280,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:18"
                                                  }
                                                ],
                                                "id": 5281,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:18"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5188,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 5282,
                                                        "name": "Identifier",
                                                        "src": "1831:22:18"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5255,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 5283,
                                                        "name": "Identifier",
                                                        "src": "1854:12:18"
                                                      }
                                                    ],
                                                    "id": 5284,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:18"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5268,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 5285,
                                                    "name": "Identifier",
                                                    "src": "1868:1:18"
                                                  }
                                                ],
                                                "id": 5286,
                                                "name": "IndexAccess",
                                                "src": "1831:39:18"
                                              }
                                            ],
                                            "id": 5287,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:18"
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
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
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
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5200,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 5288,
                                                            "name": "Identifier",
                                                            "src": "1899:13:18"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5255,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5289,
                                                            "name": "Identifier",
                                                            "src": "1913:12:18"
                                                          }
                                                        ],
                                                        "id": 5290,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:18"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5281,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5291,
                                                        "name": "Identifier",
                                                        "src": "1927:13:18"
                                                      }
                                                    ],
                                                    "id": 5292,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:18"
                                                  }
                                                ],
                                                "id": 5293,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:18"
                                              }
                                            ],
                                            "id": 5294,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:18"
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
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5194,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 5295,
                                                            "name": "Identifier",
                                                            "src": "1970:17:18"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5255,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5296,
                                                            "name": "Identifier",
                                                            "src": "1988:12:18"
                                                          }
                                                        ],
                                                        "id": 5297,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:18"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5281,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5298,
                                                        "name": "Identifier",
                                                        "src": "2002:13:18"
                                                      }
                                                    ],
                                                    "id": 5299,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:18"
                                                  }
                                                ],
                                                "id": 5300,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:18"
                                              }
                                            ],
                                            "id": 5301,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:18"
                                          }
                                        ],
                                        "id": 5302,
                                        "name": "Block",
                                        "src": "1785:250:18"
                                      }
                                    ],
                                    "id": 5303,
                                    "name": "ForStatement",
                                    "src": "1714:321:18"
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
                                          "operator": "delete",
                                          "prefix": true,
                                          "type": "tuple()"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5188,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 5304,
                                                "name": "Identifier",
                                                "src": "2060:22:18"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5255,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 5305,
                                                "name": "Identifier",
                                                "src": "2083:12:18"
                                              }
                                            ],
                                            "id": 5306,
                                            "name": "IndexAccess",
                                            "src": "2060:36:18"
                                          }
                                        ],
                                        "id": 5307,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:18"
                                      }
                                    ],
                                    "id": 5308,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:18"
                                  }
                                ],
                                "id": 5309,
                                "name": "Block",
                                "src": "1696:415:18"
                              }
                            ],
                            "id": 5310,
                            "name": "IfStatement",
                            "src": "1659:452:18"
                          }
                        ],
                        "id": 5311,
                        "name": "Block",
                        "src": "1581:540:18"
                      }
                    ],
                    "id": 5312,
                    "name": "ForStatement",
                    "src": "1551:570:18"
                  }
                ],
                "id": 5313,
                "name": "Block",
                "src": "1541:586:18"
              }
            ],
            "id": 5314,
            "name": "FunctionDefinition",
            "src": "1517:610:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 5361,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5337,
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
                        "id": 5315,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:18"
                      }
                    ],
                    "id": 5316,
                    "name": "VariableDeclaration",
                    "src": "2165:19:18"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5337,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5317,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:18"
                      }
                    ],
                    "id": 5318,
                    "name": "VariableDeclaration",
                    "src": "2186:12:18"
                  }
                ],
                "id": 5319,
                "name": "ParameterList",
                "src": "2164:35:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5320,
                "name": "ParameterList",
                "src": "2221:0:18"
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
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
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
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5200,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 5321,
                                    "name": "Identifier",
                                    "src": "2231:13:18"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5316,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5322,
                                    "name": "Identifier",
                                    "src": "2245:12:18"
                                  }
                                ],
                                "id": 5324,
                                "name": "IndexAccess",
                                "src": "2231:27:18"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5318,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 5323,
                                "name": "Identifier",
                                "src": "2259:4:18"
                              }
                            ],
                            "id": 5325,
                            "name": "IndexAccess",
                            "src": "2231:33:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 5326,
                            "name": "Literal",
                            "src": "2267:4:18"
                          }
                        ],
                        "id": 5327,
                        "name": "Assignment",
                        "src": "2231:40:18"
                      }
                    ],
                    "id": 5328,
                    "name": "ExpressionStatement",
                    "src": "2231:40:18"
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5188,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5329,
                                    "name": "Identifier",
                                    "src": "2281:22:18"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5316,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5330,
                                    "name": "Identifier",
                                    "src": "2304:12:18"
                                  }
                                ],
                                "id": 5331,
                                "name": "IndexAccess",
                                "src": "2281:36:18"
                              }
                            ],
                            "id": 5332,
                            "name": "MemberAccess",
                            "src": "2281:41:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5318,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5333,
                            "name": "Identifier",
                            "src": "2323:4:18"
                          }
                        ],
                        "id": 5334,
                        "name": "FunctionCall",
                        "src": "2281:47:18"
                      }
                    ],
                    "id": 5335,
                    "name": "ExpressionStatement",
                    "src": "2281:47:18"
                  }
                ],
                "id": 5336,
                "name": "Block",
                "src": "2221:114:18"
              }
            ],
            "id": 5337,
            "name": "FunctionDefinition",
            "src": "2133:202:18"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 5361,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5353,
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
                        "id": 5338,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:18"
                      }
                    ],
                    "id": 5339,
                    "name": "VariableDeclaration",
                    "src": "2376:19:18"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5353,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5340,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:18"
                      }
                    ],
                    "id": 5341,
                    "name": "VariableDeclaration",
                    "src": "2397:12:18"
                  }
                ],
                "id": 5342,
                "name": "ParameterList",
                "src": "2375:35:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 5353,
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
                        "id": 5343,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:18"
                      }
                    ],
                    "id": 5344,
                    "name": "VariableDeclaration",
                    "src": "2458:14:18"
                  }
                ],
                "id": 5345,
                "name": "ParameterList",
                "src": "2457:16:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5345
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5200,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 5346,
                                "name": "Identifier",
                                "src": "2495:13:18"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5339,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5347,
                                "name": "Identifier",
                                "src": "2509:12:18"
                              }
                            ],
                            "id": 5348,
                            "name": "IndexAccess",
                            "src": "2495:27:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5341,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5349,
                            "name": "Identifier",
                            "src": "2523:4:18"
                          }
                        ],
                        "id": 5350,
                        "name": "IndexAccess",
                        "src": "2495:33:18"
                      }
                    ],
                    "id": 5351,
                    "name": "Return",
                    "src": "2488:40:18"
                  }
                ],
                "id": 5352,
                "name": "Block",
                "src": "2478:57:18"
              }
            ],
            "id": 5353,
            "name": "FunctionDefinition",
            "src": "2341:194:18"
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
              "name": "getFunctionList",
              "payable": false,
              "scope": 5361,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5354,
                "name": "ParameterList",
                "src": "2565:2:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 5360,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 5355,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 5356,
                            "name": "Literal",
                            "src": "2593:2:18"
                          }
                        ],
                        "id": 5357,
                        "name": "ArrayTypeName",
                        "src": "2586:10:18"
                      }
                    ],
                    "id": 5358,
                    "name": "VariableDeclaration",
                    "src": "2586:24:18"
                  }
                ],
                "id": 5359,
                "name": "ParameterList",
                "src": "2585:26:18"
              }
            ],
            "id": 5360,
            "name": "FunctionDefinition",
            "src": "2541:71:18"
          }
        ],
        "id": 5361,
        "name": "ContractDefinition",
        "src": "610:2004:18"
      }
    ],
    "id": 5362,
    "name": "SourceUnit",
    "src": "584:2031:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.354Z"
}