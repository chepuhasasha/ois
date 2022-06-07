import { Container } from "pixi.js";
import { Widget } from "./widget";

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
    this.widgets.forEach((w) => {
      this.container.addChild(w.container);
      w.setup();
    });
  }
}
