import {Offer} from "./offer";
import {Slice} from "./slice";

export interface Serializer {
  fromJson(json: Slice): Offer;

  toJson(resource: Offer): Slice;
}
