import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37Token, KIP37TokenInterface } from "../KIP37Token";
export declare class KIP37Token__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP37Token>;
    getDeployTransaction(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP37Token;
    connect(signer: Signer): KIP37Token__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200416d3803806200416d833981018060405260208110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919050505080620000a06301ffc9a760e01b6200017760201b60201c565b620000b1816200024660201b60201c565b620000c9636433ca1f60e01b6200017760201b60201c565b620000e1630e89341c60e01b6200017760201b60201c565b50620000fa639e094e9e60e01b6200017760201b60201c565b6200010b336200025f60201b60201c565b6006805460ff19169055620001477f0e8ffdb70000000000000000000000000000000000000000000000000000000062000177602090811b901c565b6200015833620002b160201b60201c565b6200017063dfd9d9ec60e01b6200017760201b60201c565b50620004cf565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200020957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b80516200025b9060049060208401906200042a565b5050565b6200027a8160056200030360201b620037ce1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b620002cc8160086200030360201b620037ce1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620003158282620003a760201b60201c565b156200038257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200040a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806200414b6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200046d57805160ff19168380011785556200049d565b828001600101855582156200049d579182015b828111156200049d57825182559160200191906001019062000480565b50620004ab929150620004af565b5090565b620004cc91905b80821115620004ab5760008155600101620004b6565b90565b613c6c80620004df6000396000f3fe608060405234801561001057600080fd5b50600436106101c25760003560e01c8063836a1040116100f9578063cd53d08e11610097578063e985e9c511610071578063e985e9c514610bf8578063f242432a14610c26578063f5298aca14610cef578063fabc1cbc14610d21576101c2565b8063cd53d08e14610962578063cfa84fc11461099b578063d81d0a1514610ac5576101c2565b806398650275116100d357806398650275146108e9578063a22cb465146108f1578063aa271e1a1461091f578063bd85b03914610945576101c2565b8063836a1040146108895780638456cb59146108bb578063983b2d56146108c3576101c2565b806346fbf68e116101665780635c975abb116101405780635c975abb146107205780636b20c454146107285780636ef8d66d1461085b57806382dc1ec414610863576101c2565b806346fbf68e146104d75780634b068c78146104fd5780634e1273f4146105ad576101c2565b80630e89341c116101a25780630e89341c1461025d578063136439dd146102ef5780632eb2c2d61461030e5780633f4ba83a146104cf576101c2565b8062dde10e146101c7578062fdd58e146101f857806301ffc9a714610236575b600080fd5b6101e4600480360360208110156101dd57600080fd5b5035610d3e565b604080519115158252519081900360200190f35b6102246004803603604081101561020e57600080fd5b506001600160a01b038135169060200135610d56565b60408051918252519081900360200190f35b6101e46004803603602081101561024c57600080fd5b50356001600160e01b031916610dc8565b61027a6004803603602081101561027357600080fd5b5035610de7565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102b457818101518382015260200161029c565b50505050905090810190601f1680156102e15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61030c6004803603602081101561030557600080fd5b5035610f29565b005b61030c600480360360a081101561032457600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561035757600080fd5b82018360208201111561036957600080fd5b803590602001918460208302840111600160201b8311171561038a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156103d957600080fd5b8201836020820111156103eb57600080fd5b803590602001918460208302840111600160201b8311171561040c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561045b57600080fd5b82018360208201111561046d57600080fd5b803590602001918460018302840111600160201b8311171561048e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611031945050505050565b61030c611376565b6101e4600480360360208110156104ed57600080fd5b50356001600160a01b0316611456565b6101e46004803603606081101561051357600080fd5b813591602081013591810190606081016040820135600160201b81111561053957600080fd5b82018360208201111561054b57600080fd5b803590602001918460018302840111600160201b8311171561056c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061146f945050505050565b6106d0600480360360408110156105c357600080fd5b810190602081018135600160201b8111156105dd57600080fd5b8201836020820111156105ef57600080fd5b803590602001918460208302840111600160201b8311171561061057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561065f57600080fd5b82018360208201111561067157600080fd5b803590602001918460208302840111600160201b8311171561069257600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061161c945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561070c5781810151838201526020016106f4565b505050509050019250505060405180910390f35b6101e4611789565b61030c6004803603606081101561073e57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561076857600080fd5b82018360208201111561077a57600080fd5b803590602001918460208302840111600160201b8311171561079b57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156107ea57600080fd5b8201836020820111156107fc57600080fd5b803590602001918460208302840111600160201b8311171561081d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611793945050505050565b61030c61180f565b61030c6004803603602081101561087957600080fd5b50356001600160a01b031661181a565b61030c6004803603606081101561089f57600080fd5b508035906001600160a01b03602082013516906040013561186d565b61030c61192c565b61030c600480360360208110156108d957600080fd5b50356001600160a01b0316611a10565b61030c611a60565b61030c6004803603604081101561090757600080fd5b506001600160a01b0381351690602001351515611a69565b6101e46004803603602081101561093557600080fd5b50356001600160a01b0316611b5b565b6102246004803603602081101561095b57600080fd5b5035611b6e565b61097f6004803603602081101561097857600080fd5b5035611b80565b604080516001600160a01b039092168252519081900360200190f35b61030c600480360360608110156109b157600080fd5b81359190810190604081016020820135600160201b8111156109d257600080fd5b8201836020820111156109e457600080fd5b803590602001918460208302840111600160201b83111715610a0557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610a5457600080fd5b820183602082011115610a6657600080fd5b803590602001918460208302840111600160201b83111715610a8757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611b9b945050505050565b61030c60048036036060811015610adb57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610b0557600080fd5b820183602082011115610b1757600080fd5b803590602001918460208302840111600160201b83111715610b3857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610b8757600080fd5b820183602082011115610b9957600080fd5b803590602001918460208302840111600160201b83111715610bba57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611ce9945050505050565b6101e460048036036040811015610c0e57600080fd5b506001600160a01b0381358116916020013516611dd0565b61030c600480360360a0811015610c3c57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b811115610c7b57600080fd5b820183602082011115610c8d57600080fd5b803590602001918460018302840111600160201b83111715610cae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611dfe945050505050565b61030c60048036036060811015610d0557600080fd5b506001600160a01b038135169060208101359060400135612013565b61030c60048036036020811015610d3757600080fd5b503561208a565b60008181526007602052604090205460ff165b919050565b60006001600160a01b038316610da057604051600160e51b62461bcd0281526004018080602001828103825260298152602001806139856029913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b6000818152600a60209081526040918290208054835160026001831615610100026000190190921691909104601f81018490048402820184019094528381526060938493919291830182828015610e7f5780601f10610e5457610100808354040283529160200191610e7f565b820191906000526020600020905b815481529060010190602001808311610e6257829003601f168201915b505050505090508051600014610e96579050610d51565b6004805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f1c5780601f10610ef157610100808354040283529160200191610f1c565b820191906000526020600020905b815481529060010190602001808311610eff57829003601f168201915b5050505050915050919050565b610f3233611456565b610f7057604051600160e51b62461bcd0281526004018080602001828103825260308152602001806139126030913960400191505060405180910390fd5b60008181526007602052604090205460ff1615610fd75760408051600160e51b62461bcd02815260206004820152601d60248201527f4b495033375061757361626c653a20616c726561647920706175736564000000604482015290519081900360640190fd5b600081815260076020908152604091829020805460ff191660011790558151838152339181019190915281517fabdb1c9133626eb4f8c5f2ec7e3c60a969a2fb148a0c341a3cf6597242c8f8f5929181900390910190a150565b815183511461107457604051600160e51b62461bcd0281526004018080602001828103825260268152602001806139fe6026913960400191505060405180910390fd5b6001600160a01b0384166110bc57604051600160e51b62461bcd028152600401808060200182810382526023815260200180613b976023913960400191505060405180910390fd5b6110c4612193565b6001600160a01b0316856001600160a01b031614806110ef57506110ef856110ea612193565b611dd0565b61112d57604051600160e51b62461bcd028152600401808060200182810382526030815260200180613a246030913960400191505060405180910390fd5b6000611137612193565b9050611147818787878787612197565b60005b845181101561124857600085828151811061116157fe5b60200260200101519050600085838151811061117957fe5b602002602001015190506111e681604051806060016040528060288152602001613a54602891396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546122689092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a168152205461121d9082612302565b60009283526001602081815260408086206001600160a01b038d16875290915290932055500161114a565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156112ce5781810151838201526020016112b6565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561130d5781810151838201526020016112f5565b5050505090500194505050505060405180910390a461133081878787878761235f565b61136e57604051600160e51b62461bcd028152600401808060200182810382526036815260200180613bba6036913960400191505060405180910390fd5b505050505050565b61137f33611456565b6113bd57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806139126030913960400191505060405180910390fd5b60065460ff166114175760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6006805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b600061146960058363ffffffff61285216565b92915050565b600061147a33611b5b565b6114b857604051600160e51b62461bcd028152600401808060200182810382526030815260200180613a7c6030913960400191505060405180910390fd5b6114c1846128bc565b156115165760408051600160e51b62461bcd02815260206004820152601c60248201527f4b495033373a20746f6b656e20616c7265616479206372656174656400000000604482015290519081900360640190fd5b600084815260096020908152604080832080546001600160a01b0319163390811790915581519283019091529181526115539190869086906128d9565b815115611615576000848152600a60209081526040909120835161157992850190613852565b50837f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b836040518080602001828103825283818151815260200191508051906020019080838360005b838110156115da5781810151838201526020016115c2565b50505050905090810190601f1680156116075780820380516001836020036101000a031916815260200191505b509250505060405180910390a25b9392505050565b6060815183511461166157604051600160e51b62461bcd0281526004018080602001828103825260278152602001806138eb6027913960400191505060405180910390fd5b6060835160405190808252806020026020018201604052801561168e578160200160208202803883390190505b50905060005b84518110156117815760006001600160a01b03168582815181106116b457fe5b60200260200101516001600160a01b0316141561170557604051600160e51b62461bcd02815260040180806020018281038252602f815260200180613bf0602f913960400191505060405180910390fd5b6001600085838151811061171557fe5b60200260200101518152602001908152602001600020600086838151811061173957fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061176e57fe5b6020908102919091010152600101611694565b509392505050565b60065460ff165b90565b61179b612193565b6001600160a01b0316836001600160a01b031614806117c157506117c1836110ea612193565b6117ff57604051600160e51b62461bcd028152600401808060200182810382526027815260200180613b706027913960400191505060405180910390fd5b61180a838383612a76565b505050565b61181833612d87565b565b61182333611456565b61186157604051600160e51b62461bcd0281526004018080602001828103825260308152602001806139126030913960400191505060405180910390fd5b61186a81612dcf565b50565b61187633611b5b565b6118b457604051600160e51b62461bcd028152600401808060200182810382526030815260200180613a7c6030913960400191505060405180910390fd5b6118bd836128bc565b6119115760408051600160e51b62461bcd02815260206004820152601860248201527f4b495033373a206e6f6e6578697374656e7420746f6b656e0000000000000000604482015290519081900360640190fd5b61180a828483604051806020016040528060008152506128d9565b61193533611456565b61197357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806139126030913960400191505060405180910390fd5b60065460ff16156119ce5760408051600160e51b62461bcd02815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b6006805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b611a1933611b5b565b611a5757604051600160e51b62461bcd028152600401808060200182810382526030815260200180613a7c6030913960400191505060405180910390fd5b61186a81612e17565b61181833612e5f565b816001600160a01b0316611a7b612193565b6001600160a01b03161415611ac457604051600160e51b62461bcd028152600401808060200182810382526027815260200180613af76027913960400191505060405180910390fd5b8060026000611ad1612193565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155611b15612193565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b600061146960088363ffffffff61285216565b60009081526003602052604090205490565b6009602052600090815260409020546001600160a01b031681565b611ba433611b5b565b611be257604051600160e51b62461bcd028152600401808060200182810382526030815260200180613a7c6030913960400191505060405180910390fd5b611beb836128bc565b611c3f5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495033373a206e6f6e6578697374656e7420746f6b656e0000000000000000604482015290519081900360640190fd5b8051825114611c8257604051600160e51b62461bcd0281526004018080602001828103825260298152602001806139d56029913960400191505060405180910390fd5b60005b8251811015611ce3576000838281518110611c9c57fe5b602002602001015190506000838381518110611cb457fe5b60200260200101519050611cd9828783604051806020016040528060008152506128d9565b5050600101611c85565b50505050565b611cf233611b5b565b611d3057604051600160e51b62461bcd028152600401808060200182810382526030815260200180613a7c6030913960400191505060405180910390fd5b60005b8251811015611db457611d58838281518110611d4b57fe5b60200260200101516128bc565b611dac5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495033373a206e6f6e6578697374656e7420746f6b656e0000000000000000604482015290519081900360640190fd5b600101611d33565b5061180a83838360405180602001604052806000815250612ea7565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416611e4657604051600160e51b62461bcd028152600401808060200182810382526023815260200180613b976023913960400191505060405180910390fd5b611e4e612193565b6001600160a01b0316856001600160a01b03161480611e745750611e74856110ea612193565b611eb257604051600160e51b62461bcd028152600401808060200182810382526027815260200180613b706027913960400191505060405180910390fd5b6000611ebc612193565b9050611edc818787611ecd886131bc565b611ed6886131bc565b87612197565b611f2983604051806060016040528060288152602001613a546028913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff61226816565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054611f609084612302565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4611fd5818787878787613200565b61136e57604051600160e51b62461bcd028152600401808060200182810382526030815260200180613b406030913960400191505060405180910390fd5b61201b612193565b6001600160a01b0316836001600160a01b031614806120415750612041836110ea612193565b61207f57604051600160e51b62461bcd028152600401808060200182810382526027815260200180613b706027913960400191505060405180910390fd5b61180a8383836135cc565b61209333611456565b6120d157604051600160e51b62461bcd0281526004018080602001828103825260308152602001806139126030913960400191505060405180910390fd5b60008181526007602052604090205460ff16151560011461213c5760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495033375061757361626c653a20616c726561647920756e70617573656400604482015290519081900360640190fd5b600081815260076020908152604091829020805460ff191690558151838152339181019190915281517ffe9b5e5216db9de81757f43d20f846bea509c040a560d136b8263dd8cd764238929181900390910190a150565b3390565b61219f611789565b156121de57604051600160e51b62461bcd02815260040180806020018281038252602a815260200180613acd602a913960400191505060405180910390fd5b60005b835181101561225f57600760008583815181106121fa57fe5b60209081029190910181015182528101919091526040016000205460ff161561225757604051600160e51b62461bcd028152600401808060200182810382526022815260200180613c1f6022913960400191505060405180910390fd5b6001016121e1565b50505050505050565b600081848411156122fa57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122bf5781810151838201526020016122a7565b50505050905090810190601f1680156122ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156116155760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000806060612376876001600160a01b031661375e565b61238557600192505050612848565b866001600160a01b031663bc197c8160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156124175781810151838201526020016123ff565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561245657818101518382015260200161243e565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561249257818101518382015260200161247a565b50505050905090810190601f1680156124bf5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061252c5780518252601f19909201916020918201910161250d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461258e576040519150601f19603f3d011682016040523d82523d6000602084013e612593565b606091505b5080519193509150158015906125d357508051600160e01b63bc197c810290602080840191908110156125c557600080fd5b50516001600160e01b031916145b156125e357600192505050612848565b866001600160a01b0316639b49e33260e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561267557818101518382015260200161265d565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156126b457818101518382015260200161269c565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156126f05781810151838201526020016126d8565b50505050905090810190601f16801561271d5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061278a5780518252601f19909201916020918201910161276b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146127ec576040519150601f19603f3d011682016040523d82523d6000602084013e6127f1565b606091505b50805191935091501580159061283157508051600160e11b634da4f19902906020808401919081101561282357600080fd5b50516001600160e01b031916145b1561284157600192505050612848565b6000925050505b9695505050505050565b60006001600160a01b03821661289c57604051600160e51b62461bcd028152600401808060200182810382526022815260200180613b1e6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000908152600960205260409020546001600160a01b0316151590565b6001600160a01b0384166129375760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6000612941612193565b905061295381600087611ecd886131bc565b60008481526001602090815260408083206001600160a01b0389168452909152902054612986908463ffffffff61230216565b60008581526001602090815260408083206001600160a01b038a1684528252808320939093558682526003905220546129c5908463ffffffff61230216565b600085815260036020908152604080832093909355825187815290810186905282516001600160a01b03808a1694908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929081900390910190a4612a3181600087878787613200565b612a6f57604051600160e51b62461bcd028152600401808060200182810382526030815260200180613b406030913960400191505060405180910390fd5b5050505050565b6001600160a01b038316612abe57604051600160e51b62461bcd0281526004018080602001828103825260218152602001806139646021913960400191505060405180910390fd5b8051825114612b0157604051600160e51b62461bcd0281526004018080602001828103825260268152602001806139fe6026913960400191505060405180910390fd5b6000612b0b612193565b9050612b2b81856000868660405180602001604052806000815250612197565b60005b8351811015612ca657612bc0838281518110612b4657fe5b60200260200101516040518060600160405280602281526020016139426022913960016000888681518110612b7757fe5b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b03168152602001908152602001600020546122689092919063ffffffff16565b60016000868481518110612bd057fe5b602002602001015181526020019081526020016000206000876001600160a01b03166001600160a01b0316815260200190815260200160002081905550612c73838281518110612c1c57fe5b60200260200101516040518060600160405280602781526020016139ae6027913960036000888681518110612c4d57fe5b60200260200101518152602001908152602001600020546122689092919063ffffffff16565b60036000868481518110612c8357fe5b602090810291909101810151825281019190915260400160002055600101612b2e565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015612d2d578181015183820152602001612d15565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015612d6c578181015183820152602001612d54565b5050505090500194505050505060405180910390a450505050565b612d9860058263ffffffff61376416565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b612de060058263ffffffff6137ce16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b612e2860088263ffffffff6137ce16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b612e7060088263ffffffff61376416565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b038416612f055760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b8151835114612f4857604051600160e51b62461bcd0281526004018080602001828103825260268152602001806139fe6026913960400191505060405180910390fd5b6000612f52612193565b9050612f6381600087878787612197565b60005b845181101561309457612fde60016000878481518110612f8257fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002054858381518110612fc857fe5b602002602001015161230290919063ffffffff16565b60016000878481518110612fee57fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b03168152602001908152602001600020819055506130616003600087848151811061303e57fe5b6020026020010151815260200190815260200160002054858381518110612fc857fe5b6003600087848151811061307157fe5b602090810291909101810151825281019190915260400160002055600101612f66565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561311b578181015183820152602001613103565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561315a578181015183820152602001613142565b5050505090500194505050505060405180910390a461317e8160008787878761235f565b612a6f57604051600160e51b62461bcd028152600401808060200182810382526036815260200180613bba6036913960400191505060405180910390fd5b6040805160018082528183019092526060918291906020808301908038833901905050905082816000815181106131ef57fe5b602090810291909101015292915050565b6000806060613217876001600160a01b031661375e565b61322657600192505050612848565b866001600160a01b031663f23a6e6160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156132b95781810151838201526020016132a1565b50505050905090810190601f1680156132e65780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106133515780518252601f199092019160209182019101613332565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146133b3576040519150601f19603f3d011682016040523d82523d6000602084013e6133b8565b606091505b5080519193509150158015906133f857508051600160e01b63f23a6e610290602080840191908110156133ea57600080fd5b50516001600160e01b031916145b1561340857600192505050612848565b866001600160a01b031663e78b332560e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561349b578181015183820152602001613483565b50505050905090810190601f1680156134c85780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106135335780518252601f199092019160209182019101613514565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613595576040519150601f19603f3d011682016040523d82523d6000602084013e61359a565b606091505b50805191935091501580159061283157508051600160e01b63e78b332502906020808401919081101561282357600080fd5b6001600160a01b03831661361457604051600160e51b62461bcd0281526004018080602001828103825260218152602001806139646021913960400191505060405180910390fd5b600061361e612193565b905061364e81856000613630876131bc565b613639876131bc565b60405180602001604052806000815250612197565b61369b826040518060600160405280602281526020016139426022913960008681526001602090815260408083206001600160a01b038b168452909152902054919063ffffffff61226816565b60008481526001602090815260408083206001600160a01b03891684528252918290209290925580516060810190915260278082526136fb92859291906139ae90830139600086815260036020526040902054919063ffffffff61226816565b6000848152600360209081526040808320939093558251868152908101859052825191926001600160a01b0388811693908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a450505050565b3b151590565b61376e8282612852565b6137ac57604051600160e51b62461bcd028152600401808060200182810382526021815260200180613aac6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6137d88282612852565b1561382d5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061389357805160ff19168380011785556138c0565b828001600101855582156138c0579182015b828111156138c05782518255916020019190600101906138a5565b506138cc9291506138d0565b5090565b61179091905b808211156138cc57600081556001016138d656fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d61746368506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b495033373a206275726e20616d6f756e7420657863656564732062616c616e63654b495033373a206275726e2066726f6d20746865207a65726f20616464726573734b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a206275726e20616d6f756e74206578636565647320746f74616c20737570706c794b495033373a20746f4c69737420616e64205f76616c756573206c656e677468206d69736d617463684b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495033375061757361626c653a20746f6b656e207472616e73666572207768696c65207061757365644b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c66526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033375061757361626c653a2074686520746f6b656e20697320706175736564a165627a7a72305820d9f46331cf98478141fc592d52e4549da9c11309989994f2045494092c7cde150029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
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
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
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
    static createInterface(): KIP37TokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Token;
}
//# sourceMappingURL=KIP37Token__factory.d.ts.map