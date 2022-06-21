import { Base, BaseOptions } from "./base.service";
import { Graphics, utils } from "pixi.js";
export interface PlaneProps {
  h: number;
  w: number;
}
export interface PlaneConfig extends BaseOptions {
  props: PlaneProps;
}
export class PLANE extends Base {
  private _plane: Graphics = new Graphics();
  private _props: PlaneProps;

  constructor(options: BaseOptions) {
    super(options);
    this.container.addChild(this._plane);
  }

  private setup() {
    const rad = (31 * Math.PI) / 180;
    const a = this._props.h * Math.sin(rad);
    const b = this._props.h * Math.cos(rad);
    const A = this._props.w * Math.sin(rad);
    const B = this._props.w * Math.cos(rad);
    this._plane.clear();
    this._plane.beginFill(this._color, 0.1);
    this._plane.lineStyle(2, this._color, 0.5);
    this._plane.moveTo(0, 0);
    this._plane.lineTo(b, -a);
    this._plane.lineTo(b + B, -a + A);
    this._plane.lineTo(B, A);
    this._plane.closePath();
    this._plane.endFill();
  }

  set props(props: PlaneProps) {
    this._props = props;
    this.setup();
  }

  get props() {
    return this._props;
  }

  get color() {
    return utils.hex2string(this._color);
  }

  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this._plane) {
      this.setup();
    }
  }

  get config(): PlaneConfig {
    return {
      ref: this.ref,
      selected: false,
      color: this.color,
      x: this.container.position.x,
      y: this.container.position.y,
      props: this._props,
    };
  }
}
