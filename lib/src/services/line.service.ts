import { Graphics } from "pixi.js";
import { ISchemeLine } from "../interfaces/scheme.interface";
export class Line {
  private line: Graphics = new Graphics();
  private _points: { x: number; y: number }[];
  private _color: number = 0x33343e;
  private _width: number = 3;
  constructor(options: ISchemeLine) {
    this.setup(options);
    window.muup.stage.addChild(this.line);
  }
  private setup({ points, width, color }: ISchemeLine) {
    if (width) this._width = width;
    if (color) this._color = color;
    this._points = points;
    this.draw();
    // this.addPoints(this.options.points);
  }
  private draw() {
    this.line.clear();
    this.line.lineStyle(this._width, this._color, 1);
    this.segments(this._points, 20).forEach((segment) => {
      if (!segment.bazier) {
        this.line.moveTo(segment.start.x, segment.start.y);
        this.line.lineTo(segment.end.x, segment.end.y);
        return;
      }
      this.line.bezierCurveTo(
        segment.start.x,
        segment.start.y,
        segment.bazier.x,
        segment.bazier.y,
        segment.end.x,
        segment.end.y
      );
    });
  }
  private segments(points: { x: number; y: number }[], radius: number) {
    return points.reduce((acc, point, i) => {
      if (points[i - 1]) {
        if (i === points.length - 1) {
          acc.push({
            start: this.pointInLine(points[i - 1], point, radius),
            end: point,
          });
        } else {
          acc.push({
            start: this.pointInLine(points[i - 1], point, radius),
            end: this.pointInLine(point, points[i - 1], radius),
          });
        }
        if (points[i + 1]) {
          acc.push({
            start: this.pointInLine(point, points[i - 1], radius),
            end: this.pointInLine(point, points[i + 1], radius),
            bazier: point,
          });
        }
      } else {
        acc.push({
          start: point,
          end: this.pointInLine(point, points[i + 1], radius),
        });
      }
      return acc;
    }, []);
  }
  private pointInLine(
    a: { x: number; y: number },
    b: { x: number; y: number },
    offset: number
  ) {
    const segmentLength = Math.sqrt(
      Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)
    );
    const factor = offset / segmentLength;
    return { x: a.x + (b.x - a.x) * factor, y: a.y + (b.y - a.y) * factor };
  }
  private addPoints(points: { x: number; y: number }[]) {
    points.forEach((point) => {
      const p = new Graphics();
      p.position.set(point.x, point.y);
      p.lineStyle(1, this._color, 0.5);
      p.beginFill(0x000000, 1);
      p.drawEllipse(0, 0, 6, 6 / 1.6);
      p.endFill();
      p.interactive = true;
      p.buttonMode = true;
      window.muup.stage.addChild(p);
    });
  }
  set color(color: number) {
    this._color = color;
    this.draw();
  }
  set width(width: number) {
    this._width = width;
    this.draw();
  }
  set points(points: { x: number; y: number }[]) {
    this._points = points;
    this.draw();
  }
}
