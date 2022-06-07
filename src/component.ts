import { Container } from "pixi.js";
import { Widget } from "./widget";

export interface IComponentOptions {
  where: { [key: string]: unknown };
  childsKey: string;
  widgets: { name: string; map: Record<string, string> }[];
}

export class Component {
  model: Record<string, unknown>;
  where: { [key: string]: unknown };
  childsKey: string;
  widgets: Widget[];
  parent?: string;
  id?: string;
  container: Container;
  constructor(options: IComponentOptions, model: Record<string, unknown>) {
    this.model = model;
    this.where = options.where;
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

    console.log(this.container);
    console.log(this.widgets);
  }
}
