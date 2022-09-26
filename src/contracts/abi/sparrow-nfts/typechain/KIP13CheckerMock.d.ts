/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface KIP13CheckerMockInterface extends ethers.utils.Interface {
  functions: {
    "supportsAllInterfaces(address,bytes4[])": FunctionFragment;
    "supportsKIP13(address)": FunctionFragment;
    "supportsInterface(address,bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "supportsAllInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsKIP13",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "supportsAllInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsKIP13",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class KIP13CheckerMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: KIP13CheckerMockInterface;

  functions: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsKIP13(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsKIP13(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  supportsAllInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsAllInterfaces(address,bytes4[])"(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsKIP13(account: string, overrides?: CallOverrides): Promise<boolean>;

  "supportsKIP13(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsInterface(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(address,bytes4)"(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsKIP13(account: string, overrides?: CallOverrides): Promise<boolean>;

    "supportsKIP13(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsKIP13(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsKIP13(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsKIP13(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsKIP13(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
