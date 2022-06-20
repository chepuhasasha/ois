import config from "./config.json";

import {
  Application,
  Loader,
  IApplicationOptions,
  Texture,
  TilingSprite,
  Container,
} from "pixi.js";
import { IScheme } from "./interfaces/scheme.interface";
import { Component } from "./services/component.service";
import { Line } from "./services/line.service";
import { Plane } from "./services/plane.service";
import {
  onDragStart,
  onDragEnd,
  onDragMove,
  onDragMoveMap,
} from "./services/move.service";
import { MuupText } from "./services/text.service";
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
  container = new Container();
  refs: {
    [key: string]: Component | Line | MuupText | Plane;
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

  setup(config: IScheme, cb: (muup: App) => void) {
    config.libs.forEach((path) => {
      this.loader.add(path);
    });
    this.loader.load(() => {
      const bg = new TilingSprite(
        Texture.from("bg.png"),
        this.screen.width,
        this.screen.height
      );
      bg.interactive = true;
      bg.on("pointerdown", onDragStart)
        .on("pointerup", onDragEnd)
        .on("pointerupoutside", onDragEnd)
        .on("pointermove", onDragMoveMap);
      this.stage.addChild(bg);
      this.stage.addChild(this.container);
      this.scheme = config;
      this.ticker.add(() => {
        if (this.container.position.x != bg.tilePosition.x) {
          this.container.position.x = bg.tilePosition.x;
          this.container.position.y = bg.tilePosition.y;
        }
      });
      cb(this);
    });
    return this;
  }
  set scheme(scheme: IScheme) {
    this.refs = {};
    scheme.planes.forEach((plane) => {
      if (!this.refs[plane.ref]) this.refs[plane.ref] = new Plane(plane);
      else
        console.error(
          `In schema configuration link "${
            plane.ref
          }" is duplicated. ${JSON.stringify(plane, null, 2)}"`
        );
    });
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
    scheme.texts.forEach((text) => {
      if (!this.refs[text.ref]) this.refs[text.ref] = new MuupText(text);
      else
        console.error(
          `In schema configuration link "${
            text.ref
          }" is duplicated. ${JSON.stringify(text, null, 2)}"`
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
}).setup(config, (muup) => {
  setInterval(() => {
    if (Math.random() > 0.5) {
      muup.refs["server #1"].color = "#8fff00";
      muup.refs["line #1"].color = "#8fff00";
    } else {
      muup.refs["server #1"].color = "#ff0000";
      muup.refs["line #1"].color = "#ff0000";
    }
  }, 1000);
});

