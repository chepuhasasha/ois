import { Base } from "./base.element";
import { Texture, Graphics, utils } from "pixi.js";
import { LABEL } from "./widgets/label.widget";
import { SPRITE } from "./widgets/sprite.widget";
import { BaseOptions } from "../interfaces/base.interface";
import {
  ComponentProps,
  ComponentConfig,
} from "../interfaces/component.interface";

export class COMPONENT extends Base {
  private _props: ComponentProps;
  private _sprite = new SPRITE();
  private _label = new LABEL();
  constructor(options: BaseOptions) {
    super(options);
    this.type = "component";
  }

  private setup() {
    this._label.color = this._color;
    this.container.addChild(this._label);

    this._sprite.zIndex = 2;
    this._sprite.position.y = this._label.height + 20;
    this.container.addChild(this._sprite);

    this.circle(0, this.container.height + 20);
    this.circle(0, this.container.height + 20, this._sprite.width / 4);
    this.circle(0, this.container.height + 20, this._sprite.width / 2);
    this.container.pivot.set(0, this.container.height + 20);
  }

  private circle(x: number, y: number, offset: number = 0) {
    const circle = new Graphics();
    let rad = offset;
    window.ois.ticker.add((d) => {
      if (rad >= this._sprite.width) {
        rad = 0;
      }
      rad += d / 2;
      const opacity = (this._sprite.width - rad) / this._sprite.width;
      circle.clear();
      circle.lineStyle(2, this._color, opacity);
      circle.beginFill(this._color, opacity - 0.1);
      circle.drawEllipse(x, y, rad, rad / 1.6);
    });
    circle.zIndex = 0;
    this.container.addChild(circle);
  }

  set props(props: ComponentProps) {
    this._props = props;
    this._sprite.texture = Texture.from(`${props.name}`);
    this._label.text = props.label;
    this.container.removeChildren();
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
    if (this._label) {
      this._label.color = this._color;
    }
  }

  get config(): ComponentConfig {
    return {
      ref: this.ref,
      color: this.color,
      x: this.container.position.x,
      y: this.container.position.y,
      props: this._props,
    };
  }
}
