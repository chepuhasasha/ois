import { Graphics } from "pixi.js";
import { ISchemeLine } from "../interfaces/scheme.interface";

export type IComponentStatus = "ok" | "warn" | "critical" | "error" | "default";

export class Line {
  options: ISchemeLine;
  line: Graphics = new Graphics();
  points: Graphics[] = [];
  constructor(options: ISchemeLine) {
    this.options = options;
    this.setup();
  }
  setup() {
    this.line.lineStyle(2, 0xffffff, 1);
    this.options.points.forEach((point, i) => {
      if (i === 0) {
        this.line.moveTo(point.x, point.y);
      } else {
        this.line.lineTo(point.x, point.y);
      }
      const p = new Graphics();
      p.position.set(point.x, point.y);
      p.beginFill(0xffffff, 1);
      p.drawCircle(0, 0, 4);
      p.endFill();
      // p.interactive = true;
      // p.buttonMode = true;
      this.points.push(p);
    });
    this.points.forEach((point) => {
      window.muup.stage.addChild(point);
    });
    window.muup.stage.addChild(this.line);
  }

  setStatus(status: IComponentStatus) {}
}
