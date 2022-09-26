/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { KIP17Enumerable } from "../KIP17Enumerable";

export class KIP17Enumerable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<KIP17Enumerable> {
    return super.deploy(overrides || {}) as Promise<KIP17Enumerable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KIP17Enumerable {
    return super.attach(address) as KIP17Enumerable;
  }
  connect(signer: Signer): KIP17Enumerable__factory {
    return super.connect(signer) as KIP17Enumerable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17Enumerable {
    return new Contract(address, _abi, signerOrProvider) as KIP17Enumerable;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200002a6301ffc9a760e01b6200006060201b60201c565b620000426380ac58cd60e01b6200006060201b60201c565b6200005a63780e9d6360e01b6200006060201b60201c565b62000169565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620000fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b611f6c80620001796000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342842e0e1161008c57806370a082311161006657806370a0823114610401578063a22cb46514610459578063b88d4fde146104a9578063e985e9c5146105ae576100cf565b806342842e0e146102e35780634f6ccce7146103515780636352211e14610393576100cf565b806301ffc9a7146100d4578063081812fc14610139578063095ea7b3146101a757806318160ddd146101f557806323b872dd146102135780632f745c5914610281575b600080fd5b61011f600480360360208110156100ea57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061062a565b604051808215151515815260200191505060405180910390f35b6101656004803603602081101561014f57600080fd5b8101908080359060200190929190505050610691565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101f3600480360360408110156101bd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061072c565b005b6101fd610922565b6040518082815260200191505060405180910390f35b61027f6004803603606081101561022957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061092f565b005b6102cd6004803603604081101561029757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061099e565b6040518082815260200191505060405180910390f35b61034f600480360360608110156102f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a5d565b005b61037d6004803603602081101561036757600080fd5b8101908080359060200190929190505050610a7d565b6040518082815260200191505060405180910390f35b6103bf600480360360208110156103a957600080fd5b8101908080359060200190929190505050610afd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104436004803603602081101561041757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bc5565b6040518082815260200191505060405180910390f35b6104a76004803603604081101561046f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610c9a565b005b6105ac600480360360808110156104bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561052657600080fd5b82018360208201111561053857600080fd5b8035906020019184600183028401116401000000008311171561055a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e3d565b005b610610600480360360408110156105c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eaf565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061069c82610f43565b6106f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611eb4602b913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061073782610afd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4b495031373a20617070726f76616c20746f2063757272656e74206f776e657281525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061081b575061081a8133610eaf565b5b610870576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180611edf6037913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b6109393382610fb5565b61098e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611dd86030913960400191505060405180910390fd5b6109998383836110a9565b505050565b60006109a983610bc5565b8210610a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611d86602a913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610a4a57fe5b9060005260206000200154905092915050565b610a7883838360405180602001604052806000815250610e3d565b505050565b6000610a87610922565b8210610ade576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611e89602b913960400191505060405180910390fd5b60078281548110610aeb57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611db06028913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611e386029913960400191505060405180910390fd5b610c93600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206110cd565b9050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d3c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f4b495031373a20617070726f766520746f2063616c6c6572000000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610e4884848461092f565b610e54848484846110db565b610ea9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611e086030913960400191505060405180910390fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000610fc082610f43565b611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611f16602b913960400191505060405180910390fd5b600061102083610afd565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061108f57508373ffffffffffffffffffffffffffffffffffffffff1661107784610691565b73ffffffffffffffffffffffffffffffffffffffff16145b806110a0575061109f8185610eaf565b5b91505092915050565b6110b483838361163d565b6110be8382611898565b6110c88282611a36565b505050565b600081600001549050919050565b60008060606110ff8673ffffffffffffffffffffffffffffffffffffffff16611afd565b61110e57600192505050611635565b8573ffffffffffffffffffffffffffffffffffffffff1663150b7a0260e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111de5780820151818401526020810190506111c3565b50505050905090810190601f16801561120b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106112a35780518252602082019150602081019050602083039250611280565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611305576040519150601f19603f3d011682016040523d82523d6000602084013e61130a565b606091505b508092508193505050600081511415801561138e575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561135c57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561139e57600192505050611635565b8573ffffffffffffffffffffffffffffffffffffffff16636745782b60e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561146e578082015181840152602081019050611453565b50505050905090810190601f16801561149b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106115335780518252602082019150602081019050602083039250611510565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611595576040519150601f19603f3d011682016040523d82523d6000602084013e61159a565b606091505b508092508193505050600081511415801561161e5750636745782b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168180602001905160208110156115ec57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561162e57600192505050611635565b6000925050505b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1661165d82610afd565b73ffffffffffffffffffffffffffffffffffffffff16146116c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611e616028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561174f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611d636023913960400191505060405180910390fd5b61175881611b10565b61179f600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bce565b6117e6600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bf1565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006118f06001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611c0790919063ffffffff16565b90506000600660008481526020019081526020016000205490508181146119dd576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061195d57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106119b557fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003611a2f9190611d11565b5050505050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611bcb5760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b611be660018260000154611c0790919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b6000611c4983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611c51565b905092915050565b6000838311158290611cfe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cc3578082015181840152602081019050611ca8565b50505050905090810190601f168015611cf05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b815481835581811115611d3857818360005260206000209182019101611d379190611d3d565b5b505050565b611d5f91905b80821115611d5b576000816000905550600101611d43565b5090565b9056fe4b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a72305820061ad3d5294cf38e19786fa8a77f827d952899a038f988afdca7d4c9a3d8f86c0029";
