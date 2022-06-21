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
import { BaseContainer } from "./services/baseContainer.service";
declare global {
  interface Window {
    muup: App;
  }
  interface Container {
    interactive: boolean;
  }
}

export class App extends Application {
  private _scheme: {
    components: Component[];
    lines: Line[];
    planes: Plane[];
    texts: MuupText[];
  } = { components: [], lines: [], texts: [], planes: [] };
  private _selected: Component | Line | MuupText | Plane | null | BaseContainer;
  private offset: { x: number; y: number } = { x: 0, y: 0 };
  public bg: TilingSprite;
  public loader: Loader;
  public editable: boolean = false;
  public container = new Container();
  public refs: {
    [key: string]: Component | Line | MuupText | Plane;
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
  setup() {
    this.bg = new TilingSprite(
      Texture.from("bg.png"),
      this.screen.width,
      this.screen.height
    );
    this.bg.interactive = true;
    this.bg
      .on("pointerdown", () => {
        this.selected = null;
      })
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMoveMap);
    this.stage.addChild(this.bg);
    this.stage.addChild(this.container);
    this.ticker.add((d) => {
      this.scrollToSelected(d);
      if (this.container.position.x != this.bg.tilePosition.x) {
        this.container.position.x = this.bg.tilePosition.x;
        this.container.position.y = this.bg.tilePosition.y;
      }
    });
  }

  load(config: IScheme, cb: (muup: App) => void, editable?: boolean) {
    if (editable) {
      this.editable = true;
    }
    config.libs.forEach((path) => {
      this.loader.add(path);
    });
    this.loader.load(() => {
      this.scheme = config;
      this.setup();
      cb(this);
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
  private scrollToSelected(d: number) {
    if (this._selected && this.bg.tilePosition.x > this.offset.x) {
      this.bg.tilePosition.x -= d * 20;
      if (this.bg.tilePosition.x < this.offset.x)
        this.bg.tilePosition.x = this.offset.x;
    }
    if (this._selected && this.bg.tilePosition.x < this.offset.x) {
      this.bg.tilePosition.x += d * 20;
      if (this.bg.tilePosition.x > this.offset.x)
        this.bg.tilePosition.x = this.offset.x;
    }
    if (this._selected && this.bg.tilePosition.y > this.offset.y) {
      this.bg.tilePosition.y -= d * 20;
      if (this.bg.tilePosition.y < this.offset.y)
        this.bg.tilePosition.y = this.offset.y;
    }
    if (this._selected && this.bg.tilePosition.y < this.offset.y) {
      this.bg.tilePosition.y += d * 20;
      if (this.bg.tilePosition.y > this.offset.y)
        this.bg.tilePosition.y = this.offset.y;
    }
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
          const comp = new Component(config as ISchemeComponent);
          this._scheme.components.push(comp);
          this.refs[config.ref] = comp;
          break;
        case "line":
          const line = new Line(config as ISchemeLine);
          this._scheme.lines.push(line);
          this.refs[config.ref] = line;
          break;
        case "text":
          const text = new MuupText(config as ISchemeText);
          this._scheme.texts.push(text);
          this.refs[config.ref] = text;
          break;
        case "plane":
          const plane = new Plane(config as ISchemePlane);
          this._scheme.planes.push(plane);
          this.refs[config.ref] = plane;
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

  makeConfig() {
    const result: IScheme = {
      components: [],
      lines: [],
      libs: [],
      texts: [],
      planes: [],
    };
    this._scheme.components.forEach((c) => {
      result.components.push({
        ref: c.ref,
        component: c.component,
        label: c.label,
        x: c.x,
        y: c.y,
        color: c.color,
      });
    });
    console.log(result);
  }

  set selected(el: Component | Line | MuupText | Plane | null | BaseContainer) {
    if (el) {
      this._selected = el;
      this.offset = {
        x: this.screen.width / 2 - el.container.position.x,
        y: this.screen.height / 2 - el.container.position.y,
      };
    } else this._selected = null;
  }
}

export function create(selector: string, options: IApplicationOptions) {
  window.muup = new App(selector, options);
  return window.muup;
}

create("#muup", {
  width: innerWidth,
  height: innerHeight,
}).load(
  config,
  (muup) => {
    // muup.makeConfig();
    setInterval(() => {
      if (Math.random() > 0.5) {
        muup.refs["server #1"].color = "#8fff00";
        // muup.refs["server #1"].select();
        muup.refs["line #1"].color = "#8fff00";
      } else {
        muup.refs["server #1"].color = "#ff0000";
        // muup.refs["plane #1"].select();
        muup.refs["line #1"].color = "#ff0000";
      }
    }, 1000);
  },
  true
);

