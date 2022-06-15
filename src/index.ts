import {
  Application,
  Loader,
  Texture,
  AnimatedSprite,
  IApplicationOptions,
  Sprite,
  LoaderResource,
} from "pixi.js";
import { IScheme } from "./interfaces/scheme.interface";
import { Component } from "./services/component.service";
declare global {
  interface Window {
    muup: App;
  }
}

export class App extends Application {
  loader: Loader;
  refs: {
    [key: string]: Component;
  } = {};
  constructor(selector: string, options: IApplicationOptions) {
    super(options);
    const container = document.querySelector(selector);
    if (!container) document.body.appendChild(this.view);
    else container.appendChild(this.view);
    this.loader = Loader.shared;
    return this;
  }

  load(cb: (muup: App) => void) {
    this.loader.add("./assets/spritesheet.json").load(() => {
      cb(this);
    });
  }
  setup() {}

  setScheme(scheme: IScheme) {
    scheme.components.forEach((component) => {
      this.refs[component.ref] = new Component(component);
    });
  }
}

export function create(selector: string, options: IApplicationOptions) {
  window.muup = new App(selector, options);
  return window.muup;
}

create("#muup", {
  width: innerWidth,
  height: innerHeight,
}).load((muup) => {
  muup.setScheme({
    components: [
      { ref: "server #1", component: "server", x: 100, y: 300 },
      { ref: "server #2", component: "server", x: 220, y: 350 },
      { ref: "server #3", component: "server", x: 340, y: 400 },
    ],
    lines: [],
  });
  muup.refs["server #1"].setStatus("ok");
});

