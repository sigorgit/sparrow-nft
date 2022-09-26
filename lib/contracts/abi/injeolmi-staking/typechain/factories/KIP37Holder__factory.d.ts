import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37Holder, KIP37HolderInterface } from "../KIP37Holder";
export declare class KIP37Holder__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP37Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP37Holder;
    connect(signer: Signer): KIP37Holder__factory;
    static readonly bytecode = "0x608060405261001a6301ffc9a760e01b61004f60201b60201c565b61004a7f7cc2d0170000000000000000000000000000000000000000000000000000000061004f602090811b901c565b61011d565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b61039b8061012c6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a7146100465780639b49e33214610081578063e78b33251461025f575b600080fd5b61006d6004803603602081101561005c57600080fd5b50356001600160e01b031916610328565b604080519115158252519081900360200190f35b610242600480360360a081101561009757600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156100ca57600080fd5b8201836020820111156100dc57600080fd5b803590602001918460208302840111600160201b831117156100fd57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561014c57600080fd5b82018360208201111561015e57600080fd5b803590602001918460208302840111600160201b8311171561017f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101ce57600080fd5b8201836020820111156101e057600080fd5b803590602001918460018302840111600160201b8311171561020157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610347945050505050565b604080516001600160e01b03199092168252519081900360200190f35b610242600480360360a081101561027557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156102b457600080fd5b8201836020820111156102c657600080fd5b803590602001918460018302840111600160201b831117156102e757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061035b945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b600160e11b634da4f1990295945050505050565b600160e01b63e78b3325029594505050505056fea165627a7a7230582037f9c5c72a9a58070576964d6e001c9ab049722559d525f364d137d47204cb820029";
    static readonly abi: {
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
    }[];
    static createInterface(): KIP37HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Holder;
}
//# sourceMappingURL=KIP37Holder__factory.d.ts.map