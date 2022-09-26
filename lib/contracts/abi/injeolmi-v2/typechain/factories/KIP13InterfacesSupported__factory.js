"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP13InterfacesSupported__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class KIP13InterfacesSupported__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(interfaceIds, overrides) {
        return super.deploy(interfaceIds, overrides || {});
    }
    getDeployTransaction(interfaceIds, overrides) {
        return super.getDeployTransaction(interfaceIds, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.KIP13InterfacesSupported__factory = KIP13InterfacesSupported__factory;
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
        inputs: [],
        name: "INTERFACE_ID_KIP13",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                name: "interfaceIds",
                type: "bytes4[]",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516103a33803806103a38339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185602082028301116401000000008211171561007e57600080fd5b505092919050505061009c6301ffc9a760e01b6100e160201b60201c565b60008090505b81518110156100da576100cd8282815181106100ba57fe5b60200260200101516100e160201b60201c565b80806001019150506100a2565b50506101cc565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610160576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610375602e913960400191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61019a806101db6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063d81037cd146100a0575b600080fd5b6100866004803603602081101561005157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506100fc565b604051808215151515815260200191505060405180910390f35b6100a8610163565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6301ffc9a760e01b8156fea165627a7a72305820bece481cbab1d00a16c16ed8bf8888ec7eec3019d62d4d01d41ab66e2194bd9400294b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";
//# sourceMappingURL=KIP13InterfacesSupported__factory.js.map