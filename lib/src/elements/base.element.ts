import { Container, utils } from "pixi.js";
import { BaseOptions } from "../interfaces/base.interface";
import {
  onDragEnd,
  onDragMoveStep,
  onDragStart,
} from "../services/mouse.service";

export class Base {
  container = new Container();
  type: string;
  ref: string;
  _color: number;
  [key: string]: unknown;
  constructor({ ref, color, x, y }: BaseOptions) {
    this.x = x;
    this.y = y;
    this.ref = ref;
    this.color = color;
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this.container
      // .on("pointerdown", () => {
      //   window.ois.selected = this;
      // })
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMoveStep);
    this.container.on("pointerup", () => (window.ois.selected = this));
    window.ois.container.addChild(this.container);
  }
  select() {
    window.ois.selected = this;
  }

  get x() {
    return this.container.position.x;
  }
  set x(x: number) {
    this.container.position.x = x;
  }
  get y() {
    return this.container.position.y;
  }
  set y(y: number) {
    this.container.position.y = y;
  }
  set color(color: string) {
    this._color = utils.string2hex(color);
  }
}
