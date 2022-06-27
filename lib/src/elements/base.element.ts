import { Container, InteractionEvent, IPointData, utils } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";

export class Base {
  app: App;
  container = new Container();
  isSelected: boolean = false;
  type: string;
  cursor: { x: number; y: number } = { x: 0, y: 0 };
  ref: string;
  _color: number;
  start: IPointData;
  end: IPointData;
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
      .on("pointerup", (e) => this.pointerUp(e))
      .on("pointerupoutside", (e) => this.pointerOut(e))
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
    this.cursor = e.data.getLocalPosition(this.container);
    // this.container.zIndex = Object.keys(this.app.elementsService.refs).length;
  }
  pointerUp(e: InteractionEvent) {
    this.container.alpha = 1;
    this.dragging = false;
    this.app.configService.do();
    this.end = e.data.getLocalPosition(this.container.parent);
    if (this.start.x === this.end.x && this.start.y === this.end.y) {
      this.select();
    }
  }
  pointerOut(e: InteractionEvent) {
    this.container.alpha = 1;
    this.dragging = false;
    this.app.configService.do();
    this.end = e.data.getLocalPosition(this.container.parent);
    if (this.start.x === this.end.x && this.start.y === this.end.y) {
      this.select();
    }
  }
  pointerMove(e: InteractionEvent) {
    if (this.dragging && this.app.tools.move) {
      const newPosition = e.data.getLocalPosition(this.container.parent);
      this.x = newPosition.x - this.cursor.x;
      this.y = newPosition.y - this.cursor.y;
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
