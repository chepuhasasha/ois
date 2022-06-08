import { Container } from "pixi.js";
import { Widget } from "./widget";
import { Graphics } from "pixi.js";

export interface IComponentOptions {
  model: { [key: string]: unknown };
  childsKey: string;
  widgets: { name: string; map: Record<string, string> }[];
}

export class Component {
  id?: string;
  parent?: string;
  container: any;
  frame: Graphics;
  model: Record<string, unknown>;
  data: Record<string, unknown>;
  childsKey: string;
  widgets: Widget[];
  constructor(options: IComponentOptions, data: Record<string, unknown>) {
    this.data = data;
    this.model = options.model;
    this.childsKey = options.childsKey;
    this.widgets = [];
    this.init();
    return this;
  }

  init() {
    this.container = new Container();
    this.container.interactive = true;
    this.frame = new Graphics();
    this.container.addChild(this.frame);
    this.container.on("pointerover", this.onPointerOver.bind(this));
    this.container.on("pointerout", this.onPointerOut.bind(this));
  }

  setup() {
    this.widgets.forEach((w, i) => {
      w.container.position.x = 10;
      w.container.position.y = 10;
      if (i > 0) {
        w.container.position.x =
          this.widgets[i - 1].container.x +
          this.widgets[i - 1].container.width +
          10;
      }
      this.container.addChild(w.container);
      w.setup();
    });
    this.drawframe(false);
  }

  drawframe(hover: boolean) {
    let bg = hover ? 0x000000 : 0x1e1f29;
    this.frame.clear();
    this.frame.lineStyle(1, 0x232b36, 1);
    this.frame.beginFill(bg);
    this.frame.drawRoundedRect(
      0,
      0,
      this.container.width + 18,
      this.container.height + 18,
      4
    );
    this.frame.endFill();
  }

  onPointerOver() {
    this.drawframe(true);
  }
  onPointerOut() {
    this.drawframe(false);
  }
}
