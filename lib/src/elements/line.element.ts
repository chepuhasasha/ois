import {
  Graphics,
  InteractionData,
  InteractionEvent,
  Sprite,
  Texture,
  utils,
} from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { LineProps, LineConfig } from "../interfaces/line.interface";
import { Base } from "./base.element";

export class LINE extends Base {
  private _line: Graphics = new Graphics();
  private _props: LineProps;
  private editPoints: Graphics[] = [];
  private deleteBTN = new Sprite(Texture.from("deleteBTN"));
  private selectedPoint: {
    graphics: Graphics;
    point: { x: number; y: number };
    data: InteractionData;
    drag: boolean;
  } | null;

  constructor(options: BaseOptions, app: App) {
    super(options, app);
    this.container.addChild(this._line);
    this.type = "line";
    this.deleteBTN.interactive = true;
    this.deleteBTN.buttonMode = true;
    this.deleteBTN.alpha = 0.5;
    this.deleteBTN.scale.set(0.8, 0.8);
    this.deleteBTN.on("pointerdown", () => {
      if (this.selectedPoint) {
        this.deletePoint(this.selectedPoint.point);
      }
    });
    this.deleteBTN.on("pointerover", () => {
      this.deleteBTN.alpha = 1;
    });
    this.deleteBTN.on("pointerout", () => {
      this.deleteBTN.alpha = 0.5;
    });
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

  private drawLine() {
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

  private addEditPoints() {
    this._props.points.forEach((point, i, arr) => {
      const p = this.point(point.x, point.y);
      this.container.addChild(p);
      this.editPoints.push(p);
      p.on("pointerdown", (e) => this.pointDown(p, point, e));
      p.on("pointerup", () => this.pointUp());
      p.on("pointerupoutside", () => this.pointUp());
      p.on("pointermove", () => this.pointMove());
      if (arr[i + 1]) {
        const center = this.pointInLine(point, arr[i + 1]);
        const centerPoint = this.point(center.x, center.y, true);
        this.editPoints.push(centerPoint);
        this.container.addChild(centerPoint);
        centerPoint.on("pointerdown", (e) => this.centerDown(center, e, i + 1));
      }
    });
  }

  private point(x: number, y: number, center?: boolean) {
    const point = new Graphics();
    point.position.set(x, y);
    point.beginFill(0xffffff, center ? 0.05 : 0.2);
    point.drawEllipse(0, 0, center ? 16 : 25, center ? 16 / 1.6 : 25 / 1.6);
    point.endFill();
    point.lineStyle(2, 0xffffff, 0.5);
    if (center) {
      point.moveTo(-10, -10 / 1.6);
      point.lineTo(10, 10 / 1.6);
      point.moveTo(10, -10 / 1.6);
      point.lineTo(-10, 10 / 1.6);
    } else {
      point.moveTo(0, 0);
      point.lineTo(0, -20);
    }
    point.lineStyle(0, 0);
    point.interactive = true;
    point.buttonMode = true;
    return point;
  }

  private removePoints() {
    this.editPoints.forEach((p) => {
      this.container.removeChild(p);
    });
    this.editPoints = [];
  }

  private deletePoint(point: { x: number; y: number }) {
    if (this._props.points.length === 2) {
      this.app.elementsService.remove(this.ref);
      return;
    }
    this.unselectPoint();
    const i = this._props.points.indexOf(point);
    this._props.points.splice(i, 1);
    this.removePoints();
    this.addEditPoints();
    this.drawLine();
  }

  private pointDown(
    graphics: Graphics,
    point: { x: number; y: number },
    e: InteractionEvent
  ) {
    this.app.move = false;
    this.selectPoint(graphics, point, e);
  }

  private pointUp() {
    this.app.move = true;
    if (this.selectedPoint) this.selectedPoint.drag = false;
    this.removePoints();
    this.addEditPoints();
  }

  private pointMove() {
    if (this.selectedPoint && this.selectedPoint.drag) {
      const newCoords = this.selectedPoint.data.getLocalPosition(
        this.selectedPoint.graphics.parent
      );
      newCoords.x = newCoords.x - (newCoords.x % 25);
      newCoords.y = newCoords.y - (newCoords.y % 15);
      this.selectedPoint.graphics.x = newCoords.x;
      this.selectedPoint.graphics.y = newCoords.y;
      this.selectedPoint.point.x = newCoords.x;
      this.selectedPoint.point.y = newCoords.y;
      this.editPoints.forEach((point, i, arr) => {
        if (
          point === this.selectedPoint.graphics &&
          i > 0 &&
          i < arr.length - 1
        ) {
          arr[i - 1].x = this.pointInLine(arr[i - 2], newCoords).x;
          arr[i - 1].y = this.pointInLine(arr[i - 2], newCoords).y;
          arr[i + 1].x = this.pointInLine(arr[i + 2], newCoords).x;
          arr[i + 1].y = this.pointInLine(arr[i + 2], newCoords).y;
        } else if (
          point === this.selectedPoint.graphics &&
          i === arr.length - 1
        ) {
          arr[i - 1].x = this.pointInLine(arr[i - 2], newCoords).x;
          arr[i - 1].y = this.pointInLine(arr[i - 2], newCoords).y;
        } else if (point === this.selectedPoint.graphics && i === 0) {
          arr[i + 1].x = this.pointInLine(arr[i + 2], newCoords).x;
          arr[i + 1].y = this.pointInLine(arr[i + 2], newCoords).y;
        }
      });
      this.menu.position.set(
        this._props.points[0].x + this.x - 20,
        this._props.points[0].y + this.y - 20
      );
      this.deleteBTN.position.set(newCoords.x, newCoords.y);
      this.drawLine();
    }
  }

  private centerDown(
    point: { x: number; y: number },
    e: InteractionEvent,
    i: number
  ) {
    this._props.points.splice(i, 0, point);
    this.removePoints();
    this.addEditPoints();
    // this.editPoints[i + 2].emit("pointerdown", e);
  }

  selectPoint(
    graphics: Graphics,
    point: { x: number; y: number },
    e: InteractionEvent
  ) {
    this.selectedPoint = {
      graphics,
      point,
      data: e.data,
      drag: true,
    };
    this.deleteBTN.position.set(point.x, point.y);
    this.container.addChild(this.deleteBTN);
  }

  unselectPoint() {
    this.selectedPoint = null;
    this.container.removeChild(this.deleteBTN);
  }

  select() {
    if (super.select()) {
      this.addEditPoints();
      this.menu.position.set(
        this._props.points[0].x + this.x - 20,
        this._props.points[0].y + this.y - 20
      );
      return true;
    }
    return false;
  }

  unselect() {
    super.unselect();
    this.removePoints();
    this.app.move = true;
    this.unselectPoint();
  }

  set props(props: LineProps) {
    this._props = props;
    if (this._line) this.drawLine();
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
      this.drawLine();
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
