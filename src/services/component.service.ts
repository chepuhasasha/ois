import { IWidgetOptions, Widget } from "./widget.service";

export interface IComponentOptions {
  model: Record<string, unknown>;
  widgets: { name: string; map: Record<string, string> }[];
}
export interface IComponentData {
  value: { [key: string]: unknown };
}

export class Component {
  container: HTMLDivElement = document.createElement("div");
  widgets: IComponentOptions["widgets"];
  data: IComponentData;
  constructor(options: IComponentOptions) {
    this.container.className = "muup_component";
    this.widgets = options.widgets;
    this.data = this.proxy({ value: null });
  }

  render(data: IComponentData) {
    this.container.innerHTML = "";
    this.widgets.forEach((w) => {
      const W = new Widget(window.muup.widgets[w.name]);
      for (let key in w.map) {
        if (w.map[key][0] === "#") {
          W.props[key] = w.map[key]
            .slice(1)
            .split(".")
            .reduce((acc, val) => {
              return acc[val];
            }, data.value);
        } else {
          W.props[key] = w.map[key];
        }
      }
      this.container.appendChild(W.render());
    });
  }

  proxy(data: IComponentData) {
    return new Proxy(data, {
      set: (target, p, value) => {
        if (JSON.stringify(target[p as "value"]) != JSON.stringify(value)) {
          target[p as "value"] = value;
          this.render(target);
        }
        return target[p as "value"] === value;
      },
    });
  }
}
