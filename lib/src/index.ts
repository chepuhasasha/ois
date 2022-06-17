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

  load(cb: (muup: App) => void) {
    this.loader.add("./assets/spritesheet.json").load(() => {
      this.setup();
      cb(this);
    });
  }
  setup() {
    const bg = new TilingSprite(
      Texture.from("bg.png"),
      this.screen.width,
      this.screen.height
    );
    this.stage.addChild(bg);
  }

  setScheme(scheme: IScheme) {
    scheme.lines.forEach((line) => {
      this.refs[line.ref] = new Line(line);
    });
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
  muup.setScheme(config);
  muup.refs["line #2"].color = 0xff0000;
  setInterval(() => {
    if (Math.random() > 0.5) {
      muup.refs["server #1"].color = 0x8fff00;
      muup.refs["line #1"].color = 0x8fff00;
    } else {
      muup.refs["server #1"].color = 0xff0000;
      muup.refs["line #1"].color = 0xff0000;
    }
  }, 1000);
});

