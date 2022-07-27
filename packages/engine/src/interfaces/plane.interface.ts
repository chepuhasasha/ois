import { BaseOptions } from "./base.interface";

export interface PlaneProps {
  h: number;
  w: number;
}
export interface PlaneConfig extends BaseOptions {
  props: PlaneProps;
}
