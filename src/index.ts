import * as PIXI from "pixi.js";

export interface Plugin {
  install: (muup: app) => void;
}
export interface Component {
  props: string[];
}
export class app {
  app: PIXI.Application;
  components: { [key: string]: Component };
  constructor(width: number, height: number) {
    this.components = {};
    this.app = new PIXI.Application({ width, height });
    return this;
  }

  mount(selector: string) {
    const container = document.querySelector(selector);
    if (container) container.appendChild(this.app.view);
  }

  component(name: string, component: Component) {
    this.components[name] = component;
  }

  use(plagin: Plugin) {
    if (plagin.install) {
      plagin.install(this);
      return this;
    }
    return this;
  }
}
