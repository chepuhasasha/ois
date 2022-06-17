import { Graphics } from "pixi.js";
import { ISchemeLine } from "../interfaces/scheme.interface";

export type IComponentStatus = "ok" | "warn" | "critical" | "error" | "default";

export class Line {
  options: ISchemeLine;
  line: Graphics = new Graphics();
  points: Graphics[] = [];
  color: number = 0xffffff;
  constructor(options: ISchemeLine) {
    this.options = options;
    window.muup.stage.addChild(this.line);
    this.setup();
  }
  setup() {
    this.line.lineStyle(4, 0xffffff, 1);
    this.getSegments(this.options.points, 20).forEach((segment) => {
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
    // this.addPoints(this.options.points);
  }
  getSegments(points: { x: number; y: number }[], radius: number) {
    return points.reduce((acc, point, i) => {
      if (points[i - 1]) {
        acc.push({
          start: this.getPointInLine(points[i - 1], point, radius),
          end: this.getPointInLine(point, points[i - 1], radius),
        });
        if (points[i + 1]) {
          acc.push({
            start: this.getPointInLine(point, points[i - 1], radius),
            end: this.getPointInLine(point, points[i + 1], radius),
            bazier: point,
          });
        }
      }
      return acc;
    }, []);
  }
  addPoints(points: { x: number; y: number }[]) {
    points.forEach((point) => {
      const p = new Graphics();
      p.position.set(point.x, point.y);
      p.beginFill(0xffffff, 1);
      p.drawCircle(0, 0, 4);
      p.endFill();
      this.points.push(p);
    });
    this.points.forEach((point) => {
      window.muup.stage.addChild(point);
    });
  }
  getPointInLine(
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
}
