import { Container, InteractionEvent, utils } from "pixi.js";
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
    this.container
      .on("pointerdown", (e) => this.pointerDown(e))
      .on("pointerup", () => this.pointerUp())
      .on("pointerupoutside", () => this.pointerOut())
      .on("pointermove", (e) => this.pointerMove(e));
    this.app.container.addChild(this.container);
  }
  select() {
    this.app.selected = this;
  }
  unselect() {
    this.app.selected = null;
  }
  pointerDown(e: InteractionEvent) {
    this.start = e.data.getLocalPosition(this.container.parent);
    this.container.alpha = 0.8;
    this.dragging = true;
  }
  pointerUp() {
    this.select();
    this.container.alpha = 1;
    this.dragging = false;
  }
  pointerOut() {
    this.select();
    this.container.alpha = 1;
    this.dragging = false;
  }
  pointerMove(e: InteractionEvent) {
    if (this.dragging) {
      const newPosition = e.data.getLocalPosition(this.container.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
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
