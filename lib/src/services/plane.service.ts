import { Container, Graphics, utils } from "pixi.js";
import { ISchemePlane } from "../interfaces/scheme.interface";
import { onDragStart, onDragEnd, onDragMoveStep } from "./move.service";
export class Plane {
  container = new Container();
  private plane: Graphics = new Graphics();
  private _color: number;
  private _x: number;
  private _y: number;
  private _w: number;
  private _h: number;
  constructor(options: ISchemePlane) {
    this.setup(options);
    this.container.addChild(this.plane);
    this.container.on("pointerup", () => (window.muup.selected = this));
    window.muup.container.addChild(this.container);
  }
  private setup({ x, y, w, h, color }: ISchemePlane) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.draw();
    if (window.muup.editable) this.dragging();
  }
  private draw() {
    const rad = (31 * Math.PI) / 180;
    const a = this._h * Math.sin(rad);
    const b = this._h * Math.cos(rad);
    const A = this._w * Math.sin(rad);
    const B = this._w * Math.cos(rad);
    this.plane.clear();
    this.plane.beginFill(this._color, 0.1);
    this.plane.lineStyle(2, this._color, 0.5);
    this.plane.moveTo(0, 0);
    this.plane.lineTo(b, -a);
    this.plane.lineTo(b + B, -a + A);
    this.plane.lineTo(B, A);
    this.plane.closePath();
    this.plane.endFill();
  }
  private dragging() {
    this.container.interactive = true;
    this.container
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMoveStep);
  }
  select() {
    window.muup.selected = this;
  }
  set color(color: string) {
    this._color = utils.string2hex(color);
    this.draw();
  }
  set w(width: number) {
    this._w = width;
    this.draw();
  }
  set h(height: number) {
    this._h = height;
    this.draw();
  }
  set x(x: number) {
    this._x = x;
    this.container.position.x = x;

    this.draw();
  }
  set y(y: number) {
    this._y = y;
    this.container.position.y = y;
    this.draw();
  }
}
