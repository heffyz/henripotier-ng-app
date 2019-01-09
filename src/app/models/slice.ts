import {Offer} from "./offer";

export class Slice extends Offer{
  sliceValue:number;

  constructor(type: string, value: number, sliceValue: number) {
    super(type, value);
    this.sliceValue = sliceValue;
  }
}
