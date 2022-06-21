import { Container, utils } from "pixi.js";
import { util } from "webpack";
import { onDragEnd, onDragMoveStep, onDragStart } from "./mouse.service";

export interface BaseOptions {
  ref: string;
  color: string;
  selected: boolean;
  x: number;
  y: number;
}

export class Base {
  container = new Container();
  ref: string;
  _color: number;
  constructor({ ref, color, selected, x, y }: BaseOptions) {
    this.x = x;
    this.y = y;
    this.ref = ref;
    this.color = color;
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this.container
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMoveStep);
    if (selected) this.select();
    this.container.on("pointerup", () => (window.muup.selected = this));
    window.muup.container.addChild(this.container);
  }
  select() {
    window.muup.selected = this;
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
