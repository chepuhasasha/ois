import config from "./config.json";

import {
  Application,
  Loader,
  IApplicationOptions,
  Texture,
  TilingSprite,
} from "pixi.js";
import { IScheme } from "./interfaces/scheme.interface";
import { Component } from "./services/component.service";
import { Line } from "./services/line.service";
declare global {
  interface Window {
    muup: App;
  }
  interface Container {
    interactive: boolean;
  }
}

export class App extends Application {
  loader: Loader;
  refs: {
    [key: string]: Component | Line;
  } = {};
  [key: string]: unknown;

  constructor(selector: string, options: IApplicationOptions) {
    super({
      antialias: true,
      backgroundColor: 0x0a0c13,
      ...options,
    });
    const container = document.querySelector(selector);
    if (!container) document.body.appendChild(this.view);
    else container.appendChild(this.view);
    this.loader = Loader.shared;
    return this;
  }

  setup(config: IScheme, cb: (refs: App["refs"]) => void) {
    config.libs.forEach((path) => {
      this.loader.add(path);
    });
    this.loader.load(() => {
      const bg = new TilingSprite(
        Texture.from("bg.png"),
        this.screen.width,
        this.screen.height
      );
      this.stage.addChild(bg);
      this.scheme = config;
      cb(this.refs);
    });
    return this;
  }

  set scheme(scheme: IScheme) {
    this.refs = {};
    scheme.lines.forEach((line) => {
      if (!this.refs[line.ref]) this.refs[line.ref] = new Line(line);
      else
        console.error(
          `In schema configuration link "${
            line.ref
          } is duplicated. ${JSON.stringify(line, null, 2)}"`
        );
    });
    scheme.components.forEach((component) => {
      if (!this.refs[component.ref])
        this.refs[component.ref] = new Component(component);
      else
        console.error(
          `In schema configuration link "${
            component.ref
          }" is duplicated. ${JSON.stringify(component, null, 2)}"`
        );
    });
  }

  use(plugin: (muup: App) => void) {
    plugin(this);
  }
}

export function create(selector: string, options: IApplicationOptions) {
  window.muup = new App(selector, options);
  return window.muup;
}

create("#muup", {
  width: innerWidth,
  height: innerHeight,
}).setup(config, (refs) => {
  setInterval(() => {
    if (Math.random() > 0.5) {
      refs["server #1"].color = "#8fff00";
      refs["line #1"].color = "#8fff00";
    } else {
      refs["server #1"].color = "#ff0000";
      refs["line #1"].color = "#ff0000";
    }
  }, 1000);
});

