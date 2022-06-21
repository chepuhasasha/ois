import { utils, Text, TextStyleFontWeight } from "pixi.js";
import { Base, BaseOptions } from "./base.service";

export interface TextProps {
  fontWidth: string;
  fontSize: number;
  skew: boolean;
  text: string;
}
export interface TextConfig extends BaseOptions {
  props: TextProps;
}
export class TEXT extends Base {
  private _text = new Text("");
  private _props: TextProps;
  constructor(options: BaseOptions) {
    super(options);
  }

  private setup() {
    if (this._props.skew) {
      this._text.skew.set(-1.03, (31 * Math.PI) / 180);
    }
    this._text.style.fontWeight = this._props.fontWidth as TextStyleFontWeight;
    this._text.style.fontSize = this._props.fontSize;
    this._text.style.fill = this._color;
    this._text.text = this._props.text;
    this.container.addChild(this._text);
  }

  set props(props: TextProps) {
    this._props = props;
    this.container.removeChildren();
    this.setup();
  }
  set text(text: string) {
    if (this._text) {
      this._text.text = text;
    }
  }

  get props() {
    return this._props;
  }
  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this._text) {
      this._text.style.fill = this._color;
    }
  }
}
