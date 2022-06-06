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
  constructor(options: IComponentOptions, model: Record<string, unknown>) {
    this.model = model;
    this.where = options.where;
    this.childsKey = options.childsKey;
    this.widgets = [];
    return this;
  }
  setup() {
    this.widgets.forEach((w) => w.setup());
    console.log(this.widgets);
  }
}
