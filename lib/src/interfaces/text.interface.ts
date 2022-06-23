import { BaseOptions } from "./base.interface";

export interface TextProps {
  fontWidth: string;
  fontSize: number;
  skew: boolean;
  text: string;
}
export interface TextConfig extends BaseOptions {
  props: TextProps;
}
