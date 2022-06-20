import config from "./config.json";

import {
  Application,
  Loader,
  IApplicationOptions,
  Texture,
  TilingSprite,
  Container,
} from "pixi.js";
import {
  IScheme,
  ISchemeComponent,
  ISchemeLine,
  ISchemePlane,
  ISchemeText,
} from "./interfaces/scheme.interface";
import { Component } from "./services/component.service";
import { Line } from "./services/line.service";
import { Plane } from "./services/plane.service";
import { onDragStart, onDragEnd, onDragMoveMap } from "./services/move.service";
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
  editable: boolean = false;
  _selected: Component | Line | MuupText | Plane | null;
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
      cb(this);
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
    });
    return this;
  }
  set scheme(scheme: IScheme) {
    this.refs = {};
    scheme.planes.forEach((plane) => {
      this.add("plane", plane);
    });
    scheme.lines.forEach((line) => {
      this.add("line", line);
    });
    scheme.components.forEach((component) => {
      this.add("component", component);
    });
    scheme.texts.forEach((text) => {
      this.add("text", text);
    });
  }

  add(type: "line", config: ISchemeLine): void;
  add(type: "component", config: ISchemeComponent): void;
  add(type: "text", config: ISchemeText): void;
  add(type: "plane", config: ISchemePlane): void;
  add(
    type: "component" | "line" | "text" | "plane",
    config: ISchemeComponent | ISchemeLine | ISchemeText | ISchemePlane
  ) {
    if (!this.refs[config.ref])
      switch (type) {
        case "component":
          this.refs[config.ref] = new Component(config as ISchemeComponent);
          break;
        case "line":
          this.refs[config.ref] = new Line(config as ISchemeLine);
          break;
        case "text":
          this.refs[config.ref] = new MuupText(config as ISchemeText);
          break;
        case "plane":
          this.refs[config.ref] = new Plane(config as ISchemePlane);
          break;

        default:
          break;
      }
    else
      console.error(
        `In schema configuration link "${
          config.ref
        }" is duplicated. ${JSON.stringify(config, null, 2)}"`
      );
  }

  remove(ref: string) {
    if (this.refs[ref]) {
      this.container.removeChild(this.refs[ref].container);
      delete this.refs[ref];
    }
  }

  use(plugin: (muup: App) => void) {
    plugin(this);
  }

  set selected(el: Component | Line | MuupText | Plane | null) {
    this._selected = el;
    console.log(this._selected);
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
  muup.editable = true;
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

