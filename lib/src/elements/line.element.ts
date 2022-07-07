import { Graphics, InteractionData, Sprite, Texture, utils } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { LineProps, LineConfig } from "../interfaces/line.interface";
import { Base } from "./base.element";

export class LINE extends Base {
  private _line: Graphics = new Graphics();
  private _props: LineProps;
  private editPoints: Graphics[] = [];

  constructor(options: BaseOptions, app: App) {
    super(options, app);
    this.container.addChild(this._line);
    this.type = "line";
  }

  private pointInLine(
    a: { x: number; y: number },
    b: { x: number; y: number },
    offset?: number
  ) {
    const segmentLength = Math.sqrt(
      Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)
    );
    let factor = segmentLength / 2 / segmentLength;
    if (offset) {
      factor = offset / segmentLength;
    }
    return { x: a.x + (b.x - a.x) * factor, y: a.y + (b.y - a.y) * factor };
  }

  private segments(
    points: { x: number; y: number }[],
    radius: number
  ): {
    start: { x: number; y: number };
    end: { x: number; y: number };
    bazier?: { x: number; y: number };
    index: number;
  }[] {
    return points.reduce((acc, point, i) => {
      if (points[i - 1]) {
        if (i === points.length - 1) {
          acc.push({
            start: this.pointInLine(points[i - 1], point, radius),
            end: point,
            index: i,
          });
        } else {
          acc.push({
            start: this.pointInLine(points[i - 1], point, radius),
            end: this.pointInLine(point, points[i - 1], radius),
            index: i,
          });
        }
        if (points[i + 1]) {
          acc.push({
            start: this.pointInLine(point, points[i - 1], radius),
            end: this.pointInLine(point, points[i + 1], radius),
            bazier: point,
            index: i,
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
    this._line.beginFill(0xffffff, 0.01);
    this._line.moveTo(this._props.points[0].x, this._props.points[0].y);
    this._props.points.forEach((point) => {
      this._line.lineTo(point.x + this._props.width, point.y);
    });
    this._props.points.forEach((point, i, arr) => {
      this._line.lineTo(
        arr[arr.length - 1 - i].x - this._props.width - 40,
        arr[arr.length - 1 - i].y
      );
    });
    this._line.endFill();
    this._line.closePath();
  }

  private addPoints() {
    this._props.points.forEach((point, i, arr) => {
      const p = this.point(point.x, point.y);
      this.dragPoint(p, point);
      this.container.addChild(p);
      this.editPoints.push(p);
      if (arr[i + 1]) {
        const center = this.pointInLine(point, arr[i + 1]);
        const centerPoint = this.point(center.x, center.y, true);
        this.editPoints.push(centerPoint);
        this.container.addChild(centerPoint);
        this.dragPoint(centerPoint, center, i + 1);
      }
    });
  }
  private point(x: number, y: number, center?: boolean) {
    const point = new Graphics();
    point.position.set(x, y);
    point.lineStyle(2, 0xffffff, 0.3);
    point.moveTo(0, 0);
    point.lineTo(0, -20);
    point.lineStyle(0, 0);
    point.beginFill(0xffffff, 0.2);
    point.drawEllipse(0, 0, center ? 16 : 25, center ? 16 / 1.6 : 25 / 1.6);
    point.endFill();
    point.interactive = true;
    point.buttonMode = true;
    return point;
  }

  dragPoint(
    p: Graphics,
    point: { x: number; y: number },
    furcateIndex?: number
  ) {
    let data: InteractionData;
    let drag = false;
    p.on("pointerdown", (e) => {
      data = e.data;
      drag = true;
      this.app.move = false;
      if (furcateIndex) {
        this._props.points.splice(furcateIndex, 0, point);
        this.editPoints.forEach((p) => this.container.removeChild(p));
        this.editPoints = [];
        this.addPoints();
      }
      this.setup();
    })
      .on("pointerup", () => {
        drag = false;
        this.app.move = true;
        this.app.configService.do();
        this.editPoints.forEach((p) => this.container.removeChild(p));
        this.editPoints = [];
        this.addPoints();
      })
      .on("pointerupoutside", () => {
        drag = false;
        this.app.move = true;
        this.app.configService.do();
      })
      .on("pointermove", () => {
        if (drag) {
          const newp = data.getLocalPosition(p.parent);
          newp.x = newp.x - (newp.x % 25);
          newp.y = newp.y - (newp.y % 15);
          if (furcateIndex) {
            point = this._props.points[furcateIndex];
          } else {
            this.editPoints.forEach((el, i, arr) => {
              if (el === p && i > 0 && i < arr.length - 1) {
                arr[i - 1].x = this.pointInLine(arr[i - 2], p).x;
                arr[i - 1].y = this.pointInLine(arr[i - 2], p).y;
                arr[i + 1].x = this.pointInLine(arr[i + 2], p).x;
                arr[i + 1].y = this.pointInLine(arr[i + 2], p).y;
              } else if (el === p && i === arr.length - 1) {
                arr[i - 1].x = this.pointInLine(arr[i - 2], p).x;
                arr[i - 1].y = this.pointInLine(arr[i - 2], p).y;
              } else if (el === p && i === 0) {
                arr[i + 1].x = this.pointInLine(arr[i + 2], p).x;
                arr[i + 1].y = this.pointInLine(arr[i + 2], p).y;
              }
            });
          }
          point.x = newp.x;
          p.position.x = newp.x;
          point.y = newp.y;
          p.position.y = newp.y;
          this.setup();
        }
      });
  }

  select() {
    if (super.select()) {
      this.addPoints();
      return true;
    }
    return false;
  }
  unselect() {
    super.unselect();
    this.editPoints.forEach((p) => this.container.removeChild(p));
    this.editPoints = [];
  }

  set props(props: LineProps) {
    this._props = props;
    if (this._line) this.setup();
  }

  get props() {
    return this._props;
  }

  get color() {
    return utils.hex2string(this._color);
  }

  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this._line) {
      this.setup();
    }
  }

  get config(): LineConfig {
    return {
      ref: this.ref,
      color: this.color,
      x: this.x,
      y: this.y,
      zIndex: this.zIndex,
      props: this._props,
    };
  }
}
