import { Application, IApplicationOptions } from "pixi.js";
import { Component, IComponentOptions } from "./component";
import { IWidgetOptions, Widget } from "./widget";

export interface MuupPlugin {
  install: (app: App) => void;
}
export class App {
  el: HTMLElement;
  app: Application;
  widgets: { [key: string]: IWidgetOptions };
  components: { [key: string]: IComponentOptions };
  list: Component[];
  constructor(options: IApplicationOptions) {
    this.app = new Application(options);
    this.components = {};
    this.widgets = {};
    this.list = [];
  }

  useWidget(name: string, widget: IWidgetOptions) {
    this.widgets[name] = widget;
  }

  useComponent(name: string, component: IComponentOptions) {
    this.components[name] = component;
  }

  usePlugin(plugin: MuupPlugin) {
    plugin.install(this);
  }

  tree(data: Record<string, unknown>, parent: string = "0", i: number = 0) {
    const node = this.getComponent(data);
    if (node) {
      node.id = `${parent}:${i}`;
      node.parent = `${parent}`;
      this.list.push(node);
      const childs = node.model[node.childsKey] as Record<string, unknown>[];
      childs.forEach((child, i) => {
        this.tree(child, node.id, i);
      });
    }
    return this.list;
  }

  getComponent(obj: Record<string, unknown>): null | Component {
    let result = null;
    Object.keys(this.components).forEach((name) => {
      let valid = false;
      Object.keys(this.components[name].where).forEach((key) => {
        valid = obj[key] && obj[key] === this.components[name].where[key];
      });
      if (
        valid &&
        obj[this.components[name].childsKey] &&
        Array.isArray(obj[this.components[name].childsKey])
      ) {
        let component = new Component(this.components[name], obj);
        this.components[name].widgets.forEach((widget) => {
          component.widgets.push(
            new Widget(this.widgets[widget.name], widget.map)
          );
        });
        result = component;
      }
    });
    return result;
  }

  mount(selector: string) {
    this.el = document.querySelector(selector);
    if (this.el) {
      this.el.appendChild(this.app.view);
      this.list.forEach((component) => component.setup());
    }
  }
}
