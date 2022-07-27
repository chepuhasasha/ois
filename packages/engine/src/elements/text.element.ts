import { utils, Text, TextStyleFontWeight } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { TextConfig, TextProps } from "../interfaces/text.interface";
import { Base } from "./base.element";

export class TEXT extends Base {
  private _text = new Text("");
  private _props: TextProps;
  constructor(options: BaseOptions, app: App) {
    super(options, app);
    this.type = "text";
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
    // this.container.removeChildren();
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

  get color() {
    return utils.hex2string(this._color);
  }

  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this._text) {
      this._text.style.fill = this._color;
    }
  }

  get config(): TextConfig {
    return {
      ref: this.ref,
      color: this.color,
      x: this.x,
      y: this.y,
      zIndex: this.zIndex,
      props: this._props,
    };
  }
}
