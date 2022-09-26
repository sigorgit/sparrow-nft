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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface InitialSaleInterface extends ethers.utils.Interface {
  functions: {
    "setMax(uint256)": FunctionFragment;
    "receiveNew()": FunctionFragment;
    "total()": FunctionFragment;
    "withdrawIjm()": FunctionFragment;
    "newIjm()": FunctionFragment;
    "bought(address)": FunctionFragment;
    "max()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "price()": FunctionFragment;
    "limit()": FunctionFragment;
    "setNewIjm(address)": FunctionFragment;
    "buy(uint256)": FunctionFragment;
    "withdrawKlay()": FunctionFragment;
    "step()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setStep(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setMax",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNew",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "total", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawIjm",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "newIjm", values?: undefined): string;
  encodeFunctionData(functionFragment: "bought", values: [string]): string;
  encodeFunctionData(functionFragment: "max", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(functionFragment: "limit", values?: undefined): string;
  encodeFunctionData(functionFragment: "setNewIjm", values: [string]): string;
  encodeFunctionData(functionFragment: "buy", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "withdrawKlay",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "step", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStep",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "setMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiveNew", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawIjm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newIjm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bought", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNewIjm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawKlay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "step", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStep", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class InitialSale extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: InitialSaleInterface;

  functions: {
    setMax(
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMax(uint256)"(
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    receiveNew(overrides?: Overrides): Promise<ContractTransaction>;

    "receiveNew()"(overrides?: Overrides): Promise<ContractTransaction>;

    total(overrides?: CallOverrides): Promise<[BigNumber]>;

    "total()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawIjm(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawIjm()"(overrides?: Overrides): Promise<ContractTransaction>;

    newIjm(overrides?: CallOverrides): Promise<[string]>;

    "newIjm()"(overrides?: CallOverrides): Promise<[string]>;

    bought(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "bought(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    max(overrides?: CallOverrides): Promise<[BigNumber]>;

    "max()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    "price()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    limit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setNewIjm(
      _newIjm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setNewIjm(address)"(
      _newIjm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    buy(
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buy(uint256)"(
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    withdrawKlay(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawKlay()"(overrides?: Overrides): Promise<ContractTransaction>;

    step(overrides?: CallOverrides): Promise<[BigNumber]>;

    "step()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStep(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  setMax(
    _max: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMax(uint256)"(
    _max: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  receiveNew(overrides?: Overrides): Promise<ContractTransaction>;

  "receiveNew()"(overrides?: Overrides): Promise<ContractTransaction>;

  total(overrides?: CallOverrides): Promise<BigNumber>;

  "total()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawIjm(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawIjm()"(overrides?: Overrides): Promise<ContractTransaction>;

  newIjm(overrides?: CallOverrides): Promise<string>;

  "newIjm()"(overrides?: CallOverrides): Promise<string>;

  bought(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "bought(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  max(overrides?: CallOverrides): Promise<BigNumber>;

  "max()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  "price()"(overrides?: CallOverrides): Promise<BigNumber>;

  limit(overrides?: CallOverrides): Promise<BigNumber>;

  "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

  setNewIjm(
    _newIjm: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setNewIjm(address)"(
    _newIjm: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  buy(
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buy(uint256)"(
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  withdrawKlay(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawKlay()"(overrides?: Overrides): Promise<ContractTransaction>;

  step(overrides?: CallOverrides): Promise<BigNumber>;

  "step()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStep(
    _step: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStep(uint256)"(
    _step: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    setMax(_max: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setMax(uint256)"(
      _max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    receiveNew(overrides?: CallOverrides): Promise<void>;

    "receiveNew()"(overrides?: CallOverrides): Promise<void>;

    total(overrides?: CallOverrides): Promise<BigNumber>;

    "total()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawIjm(overrides?: CallOverrides): Promise<void>;

    "withdrawIjm()"(overrides?: CallOverrides): Promise<void>;

    newIjm(overrides?: CallOverrides): Promise<string>;

    "newIjm()"(overrides?: CallOverrides): Promise<string>;

    bought(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "bought(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    "max()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    "price()"(overrides?: CallOverrides): Promise<BigNumber>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    setNewIjm(_newIjm: string, overrides?: CallOverrides): Promise<void>;

    "setNewIjm(address)"(
      _newIjm: string,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "buy(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawKlay(overrides?: CallOverrides): Promise<void>;

    "withdrawKlay()"(overrides?: CallOverrides): Promise<void>;

    step(overrides?: CallOverrides): Promise<BigNumber>;

    "step()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStep(_step: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    setMax(_max: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setMax(uint256)"(
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    receiveNew(overrides?: Overrides): Promise<BigNumber>;

    "receiveNew()"(overrides?: Overrides): Promise<BigNumber>;

    total(overrides?: CallOverrides): Promise<BigNumber>;

    "total()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawIjm(overrides?: Overrides): Promise<BigNumber>;

    "withdrawIjm()"(overrides?: Overrides): Promise<BigNumber>;

    newIjm(overrides?: CallOverrides): Promise<BigNumber>;

    "newIjm()"(overrides?: CallOverrides): Promise<BigNumber>;

    bought(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "bought(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    "max()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    "price()"(overrides?: CallOverrides): Promise<BigNumber>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    setNewIjm(_newIjm: string, overrides?: Overrides): Promise<BigNumber>;

    "setNewIjm(address)"(
      _newIjm: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    buy(amount: BigNumberish, overrides?: PayableOverrides): Promise<BigNumber>;

    "buy(uint256)"(
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    withdrawKlay(overrides?: Overrides): Promise<BigNumber>;

    "withdrawKlay()"(overrides?: Overrides): Promise<BigNumber>;

    step(overrides?: CallOverrides): Promise<BigNumber>;

    "step()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStep(_step: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setMax(
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMax(uint256)"(
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    receiveNew(overrides?: Overrides): Promise<PopulatedTransaction>;

    "receiveNew()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    total(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "total()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawIjm(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawIjm()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    newIjm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newIjm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bought(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bought(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    max(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "max()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "price()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNewIjm(
      _newIjm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setNewIjm(address)"(
      _newIjm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    buy(
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buy(uint256)"(
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    withdrawKlay(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawKlay()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    step(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "step()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStep(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
