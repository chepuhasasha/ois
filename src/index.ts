import { Application, IApplicationOptions } from "pixi.js";
import { Component, IComponentOptions } from "./helpers/component";
import { compare } from "./helpers/compare";
import { IWidgetOptions, Widget } from "./helpers/widget";

export interface MuupPlugin {
  install: (app: App) => void;
}
declare global {
  interface Window {
    muupApp: App;
  }
}
export class App {
  el: HTMLElement;
  app: Application;
  widgets: { [key: string]: IWidgetOptions };
  components: { [key: string]: IComponentOptions };
  list: Component[];
  constructor() {
    this.app = new Application({ backgroundColor: 0x0d1117, antialias: true });
    this.components = {};
    this.widgets = {};
    this.list = [];
    window.muupApp = this;
  }

  tree(data: Record<string, unknown>, parent: string = "0", i: number = 0) {
    const node = this.getComponent(data);
    if (node) {
      node.id = `${parent}:${i}`;
      node.parent = `${parent}`;
      this.list.push(node);
      const childs = node.data[node.childsKey] as Record<string, unknown>[];
      childs.forEach((child, i) => {
        this.tree(child, node.id, i);
      });
    }
    return this.list;
  }

  getComponent(obj: Record<string, unknown>): null | Component {
    let result = null;
    Object.keys(this.components).forEach((name) => {
      if (compare(this.components[name].model, obj)) {
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
      this.app.view.width = this.el.getBoundingClientRect().width;
      this.app.view.height = this.el.getBoundingClientRect().height;
    }
    this.render();
  }

  render() {
    this.list.forEach((component) => {
      this.app.stage.addChild(component.container);
      component.setup();
    });
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
}
