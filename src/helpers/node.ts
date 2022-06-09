import { IWidgetOptions, widget } from "./widget";

export interface INodeOptions {
  key: string;
  model: Record<string, unknown>;
  widgets: { name: string; map: Record<string, string> }[];
}

export class node {
  frame: HTMLDivElement = document.createElement("div");
  private widgetsLib: Record<string, IWidgetOptions> = {};
  model: INodeOptions["model"];
  widgets: INodeOptions["widgets"];
  key: INodeOptions["key"];
  constructor(options: INodeOptions, widgets: Record<string, IWidgetOptions>) {
    this.key = options.key;
    this.model = options.model;
    this.widgets = options.widgets;
    this.widgetsLib = widgets;
    this.frame.className = "muup_node";
  }

  render(data: Record<string, unknown>) {
    this.frame.innerHTML = "";
    this.widgets.forEach((w) => {
      const W = new widget(this.widgetsLib[w.name]);
      for (let key in w.map) {
        if (w.map[key][0] === "#") {
          W.props[key] = w.map[key]
            .slice(1)
            .split(".")
            .reduce((acc, val) => {
              return acc[val];
            }, data);
        } else {
          W.props[key] = w.map[key];
        }
      }
      this.frame.appendChild(W.render());
    });
  }
}
