import { Application } from "pixi.js";
import { Mover } from "./layers/mover.layer";
import { Points } from "./layers/points.layer";
import { Viewer } from "./layers/viewer.layer";
import { Factory } from "./services/factory.service";

export class Engine extends Application {
  public VIEWER: Viewer;
  public MOVER: Mover;
  public POINTS: Points;

  constructor(public FACTORY: Factory = new Factory()) {
    super({
      antialias: true,
      backgroundColor: 0xff0000,
      resolution: window.devicePixelRatio * 0.9 || 0.9,
    });
  }

  private bootstrap() {
    this.VIEWER = new Viewer(this.FACTORY);
    this.MOVER = new Mover(this.FACTORY);
    this.POINTS = new Points(this.FACTORY);
  }
}
