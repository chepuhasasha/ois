import { Container } from "pixi.js";
import { Widget } from "./widget";
import { Graphics } from "pixi.js";

export interface IComponentOptions {
  model: { [key: string]: unknown };
  childsKey: string;
  widgets: { name: string; map: Record<string, string> }[];
}

export class Component {
  model: Record<string, unknown>;
  data: Record<string, unknown>;
  childsKey: string;
  widgets: Widget[];
  parent?: string;
  id?: string;
  container: Container;
  constructor(options: IComponentOptions, data: Record<string, unknown>) {
    this.data = data;
    this.model = options.model;
    this.childsKey = options.childsKey;
    this.widgets = [];
    this.container = new Container();
    return this;
  }
  setup() {
    const frame = new Graphics();
    this.container.x = 100;
    this.container.y = 100;
    this.container.addChild(frame);
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
    frame.lineStyle(1, 0x232b36, 1);
    frame.beginFill(0x1e1f29);
    frame.drawRoundedRect(
      0,
      0,
      this.container.width + 18,
      this.container.height + 18,
      4
    );
    frame.endFill();
  }
}
