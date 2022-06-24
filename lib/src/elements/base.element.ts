import { Container, utils } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";

export class Base {
  app: App;
  container = new Container();
  isSelected: boolean = false;
  type: string;
  ref: string;
  _color: number;
  [key: string]: unknown;
  constructor({ ref, color, x, y }: BaseOptions, app: App) {
    this.app = app;
    this.x = x;
    this.y = y;
    this.ref = ref;
    this.color = color;
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this.container.on("pointerup", () => {
      this.app.selected = this;
    });
    this.container.on("pointerupoutside", () => {
      this.app.selected = this;
    });
    this.app.container.addChild(this.container);
  }
  select() {
    this.app.selected = this;
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
