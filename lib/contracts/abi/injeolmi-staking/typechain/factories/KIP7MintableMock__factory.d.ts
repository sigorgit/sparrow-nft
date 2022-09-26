import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP7MintableMock, KIP7MintableMockInterface } from "../KIP7MintableMock";
export declare class KIP7MintableMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP7MintableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP7MintableMock;
    connect(signer: Signer): KIP7MintableMock__factory;
    static readonly bytecode = "0x60806040526200001c6301ffc9a760e01b6200006360201b60201c565b62000034636578737160e01b6200006360201b60201c565b62000045336200013260201b60201c565b6200005d63eab83e2060e01b6200006360201b60201c565b620002ab565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620000f557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b6200014d8160046200018460201b62000e761790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200019682826200022860201b60201c565b156200020357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200028b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806200137c6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6110c180620002bb6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063aa271e1a11610071578063aa271e1a146102fd578063b5dba35b14610323578063b88d4fde1461032b578063dd62ed3e146103f1578063eb7955491461041f5761010b565b806370a082311461027d578063983b2d56146102a357806398650275146102c9578063a9059cbb146102d15761010b565b80633092afd5116100de5780633092afd5146101c757806340c10f19146101ef578063423f6cef1461021b57806342842e0e146102475761010b565b806301ffc9a714610110578063095ea7b31461014b57806318160ddd1461017757806323b872dd14610191575b600080fd5b6101376004803603602081101561012657600080fd5b50356001600160e01b0319166104da565b604080519115158252519081900360200190f35b6101376004803603604081101561016157600080fd5b506001600160a01b0381351690602001356104f9565b61017f61050f565b60408051918252519081900360200190f35b610137600480360360608110156101a757600080fd5b506001600160a01b03813581169160208101359091169060400135610515565b6101ed600480360360208110156101dd57600080fd5b50356001600160a01b031661056c565b005b6101376004803603604081101561020557600080fd5b506001600160a01b038135169060200135610578565b6101ed6004803603604081101561023157600080fd5b506001600160a01b0381351690602001356105cb565b6101ed6004803603606081101561025d57600080fd5b506001600160a01b038135811691602081013590911690604001356105e9565b61017f6004803603602081101561029357600080fd5b50356001600160a01b0316610609565b6101ed600480360360208110156102b957600080fd5b50356001600160a01b0316610624565b6101ed610674565b610137600480360360408110156102e757600080fd5b506001600160a01b03813516906020013561067f565b6101376004803603602081101561031357600080fd5b50356001600160a01b031661068c565b6101ed6106a5565b6101ed6004803603608081101561034157600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561037c57600080fd5b82018360208201111561038e57600080fd5b803590602001918460018302840111640100000000831117156103b057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106ec945050505050565b61017f6004803603604081101561040757600080fd5b506001600160a01b0381358116916020013516610748565b6101ed6004803603606081101561043557600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561046557600080fd5b82018360208201111561047757600080fd5b8035906020019184600183028401116401000000008311171561049957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610773945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006105063384846107c8565b50600192915050565b60035490565b60006105228484846108ba565b6001600160a01b03841660009081526002602090815260408083203380855292529091205461056291869161055d908663ffffffff610a0416565b6107c8565b5060019392505050565b61057581610a4d565b50565b60006105833361068c565b6105c157604051600160e51b62461bcd028152600401808060200182810382526030815260200180610fdc6030913960400191505060405180910390fd5b6105068383610a56565b6105e5828260405180602001604052806000815250610773565b5050565b610604838383604051806020016040528060008152506106ec565b505050565b6001600160a01b031660009081526001602052604090205490565b61062d3361068c565b61066b57604051600160e51b62461bcd028152600401808060200182810382526030815260200180610fdc6030913960400191505060405180910390fd5b61057581610b4b565b61067d33610a4d565b565b60006105063384846108ba565b600061069f60048363ffffffff610b9316565b92915050565b6106ae3361068c565b61067d57604051600160e51b62461bcd028152600401808060200182810382526030815260200180610fdc6030913960400191505060405180910390fd5b6106f7848484610515565b5061070484848484610bfd565b61074257604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610f8c602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61077d838361067f565b5061078a33848484610bfd565b61060457604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610f8c602e913960400191505060405180910390fd5b6001600160a01b03831661081057604051600160e51b62461bcd0281526004018080602001828103825260238152602001806110736023913960400191505060405180910390fd5b6001600160a01b03821661085857604051600160e51b62461bcd028152600401808060200182810382526021815260200180610f6b6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661090257604051600160e51b62461bcd02815260040180806020018281038252602481526020018061102d6024913960400191505060405180910390fd5b6001600160a01b03821661094a57604051600160e51b62461bcd028152600401808060200182810382526022815260200180610fba6022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610973908263ffffffff610a0416565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546109a8908263ffffffff610d3716565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610a4683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610d94565b9392505050565b61057581610e2e565b6001600160a01b038216610ab45760408051600160e51b62461bcd02815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600354610ac7908263ffffffff610d3716565b6003556001600160a01b038216600090815260016020526040902054610af3908263ffffffff610d3716565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610b5c60048263ffffffff610e7616565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b60006001600160a01b038216610bdd57604051600160e51b62461bcd0281526004018080602001828103825260228152602001806110516022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000610c11846001600160a01b0316610efa565b610c1d57506001610d2f565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610c9a578181015183820152602001610c82565b50505050905090810190601f168015610cc75780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610ce957600080fd5b505af1158015610cfd573d6000803e3d6000fd5b505050506040513d6020811015610d1357600080fd5b50516001600160e01b031916600160e11b634e8c461102149150505b949350505050565b600082820183811015610a465760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610e2657604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610deb578181015183820152602001610dd3565b50505050905090810190601f168015610e185780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b610e3f60048263ffffffff610f0016565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b610e808282610b93565b15610ed55760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b610f0a8282610b93565b610f4857604051600160e51b62461bcd02815260040180806020018281038252602181526020018061100c6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a7230582071861a75079c75d17cd54eec8e66596040fb6f1a2258a4a8a0e1643bec9718fc0029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): KIP7MintableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7MintableMock;
}
//# sourceMappingURL=KIP7MintableMock__factory.d.ts.map