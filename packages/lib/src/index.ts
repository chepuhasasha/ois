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
      cb(this);
    });
  }
  setup() {}

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
  muup.setScheme({
    components: [
      { ref: "server #1", component: "server", x: 100, y: 300 },
      { ref: "server #2", component: "server", x: 200, y: 300 },
      { ref: "server #3", component: "server", x: 300, y: 300 },
    ],
    lines: [
      {
        ref: "line #1",
        points: [
          { x: 100, y: 100 },
          { x: 200, y: 200 },
          { x: 300, y: 100 },
        ],
        color: 0xff0000,
        width: 2,
        dashed: false,
      },
    ],
  });
  muup.refs["server #1"].setStatus("ok");
  muup.refs["server #2"].setStatus("ok");
  setInterval(() => {
    if (Math.random() > 0.5) {
      muup.refs["server #3"].setStatus("ok");
    } else {
      muup.refs["server #3"].setStatus("default");
    }
  }, 1000);
});

