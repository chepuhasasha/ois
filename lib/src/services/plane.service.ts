import { Graphics, utils } from "pixi.js";
import { ISchemePlane } from "../interfaces/scheme.interface";
import { onDragStart, onDragEnd, onDragMoveStep } from "./move.service";
export class Plane {
  private plane: Graphics = new Graphics();
  private _color: number;
  private _x: number;
  private _y: number;
  private _w: number;
  private _h: number;
  constructor(options: ISchemePlane) {
    this.setup(options);
    window.muup.container.addChild(this.plane);
  }
  private setup({ x, y, w, h, color }: ISchemePlane) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.draw();
    this.dragging();
  }
  private draw() {
    const a = this._h * Math.sin(0.52359);
    const b = this._h * Math.cos(0.52359);
    const A = this._w * Math.sin(0.52359);
    const B = this._w * Math.cos(0.52359);
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
    this.plane.interactive = true;
    this.plane
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMoveStep);
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
    this.plane.position.x = x;

    this.draw();
  }
  set y(y: number) {
    this._y = y;
    this.plane.position.y = y;
    this.draw();
  }
}
