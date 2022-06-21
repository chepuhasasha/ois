import { Graphics, utils } from "pixi.js";
import { Base, BaseOptions } from "./base.service";

export interface LineProps {
  width: number;
  radius: number;
  points: { x: number; y: number }[];
}
export interface LineConfig extends BaseOptions {
  props: LineProps;
}
export class LINE extends Base {
  private _line: Graphics = new Graphics();
  private _props: LineProps;

  constructor(options: BaseOptions) {
    super(options);
    this.container.addChild(this._line);
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

  private setup() {
    this._line.clear();
    this._line.lineStyle(this._props.width, this._color, 1);
    this.segments(this._props.points, this._props.radius).forEach((segment) => {
      if (!segment.bazier) {
        this._line.moveTo(segment.start.x, segment.start.y);
        this._line.lineTo(segment.end.x, segment.end.y);
        return;
      }
      this._line.bezierCurveTo(
        segment.start.x,
        segment.start.y,
        segment.bazier.x,
        segment.bazier.y,
        segment.end.x,
        segment.end.y
      );
    });
    this._line.lineStyle(1, this._color, 0);
    this._line.beginFill(0x000000, 0.01);
    this._line.moveTo(this._props.points[0].x, this._props.points[0].y);
    this._props.points.forEach((point) => {
      this._line.lineTo(point.x + this._props.width, point.y);
    });
    this._props.points.forEach((point, i, arr) => {
      this._line.lineTo(
        arr[arr.length - 1 - i].x - this._props.width,
        arr[arr.length - 1 - i].y
      );
    });
    this._line.endFill();
    this._line.closePath();
  }

  private addPoints() {
    this.container.removeChildren(1, this._props.points.length + 1);
    this._props.points.forEach((point) => {
      const p = new Graphics();
      p.position.set(point.x, point.y);
      p.lineStyle(1, this._color, 0.5);
      p.beginFill(0x000000, 1);
      p.drawEllipse(0, 0, 6, 6 / 1.6);
      p.endFill();
      p.interactive = true;
      p.buttonMode = true;
      this.container.addChild(p);
    });
  }

  set props(props: LineProps) {
    this._props = props;
    if (this._line) this.setup();
    this.addPoints();
  }

  get props() {
    return this._props;
  }

  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this._line) {
      this.setup();
    }
  }
}
