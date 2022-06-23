import {
  Application,
  Loader,
  IApplicationOptions,
  Texture,
  TilingSprite,
  Container,
} from "pixi.js";
import {
  onDragStart,
  onDragEnd,
  onDragMoveMap,
} from "./services/mouse.service";
import type { BaseOptions } from "./interfaces/base.interface";
import type { AppConfig, Config } from "./interfaces/config.interface";
import { COMPONENT } from "./elements/component.element";
import { LINE } from "./elements/line.element";
import { PLANE } from "./elements/plane.element";
import { TEXT } from "./elements/text.element";
import { Base } from "./elements/base.element";
declare global {
  interface Window {
    muup: App;
  }
  interface Container {
    interactive: boolean;
  }
}
export class App extends Application {
  private _selected: Base;
  private offset: { x: number; y: number } = { x: 0, y: 0 };
  public bg: TilingSprite;
  public loader: Loader;
  public editable: boolean = false;
  public container = new Container();
  move: boolean = true;
  private _config: AppConfig = {
    offset: { x: 0, y: 0 },
    assets: [],
    components: [],
    texts: [],
    planes: [],
    lines: [],
  };
  public refs: {
    [key: string]: COMPONENT | LINE | TEXT | PLANE;
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
      Texture.from("bg"),
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
        this._config.offset.x = this.bg.tilePosition.x;
        this._config.offset.y = this.bg.tilePosition.y;
      }
    });
  }

  load(config: Config, cb: (muup: App) => void, editable?: boolean) {
    if (editable) {
      this.editable = true;
    }
    config.assets.forEach((sprite) => {
      this._config.assets.push(sprite);
      this.loader.add(sprite.name, sprite.data);
    });
    this.loader.load(() => {
      this.setup();
      this.config = config;
      cb(this);
    });
    return this;
  }
  set config(config: Config) {
    this.bg.tilePosition.x = config.offset.x;
    this.bg.tilePosition.y = config.offset.y;
    this.refs = {};
    this.container.removeChildren();
    config.planes.forEach((plane) => {
      this.add("plane", plane).props = plane.props;
    });
    config.lines.forEach((line) => {
      this.add("line", line).props = line.props;
    });
    config.components.forEach((component) => {
      this.add("component", component).props = component.props;
    });
    config.texts.forEach((text) => {
      this.add("text", text).props = text.props;
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

  add(type: string, config: BaseOptions) {
    if (!this.refs[config.ref]) {
      switch (type) {
        case "component":
          const comp = new COMPONENT(config);
          this._config.components.push(comp);
          this.refs[config.ref] = comp;
          return comp;
        case "text":
          const text = new TEXT(config);
          this._config.texts.push(text);
          this.refs[config.ref] = text;
          return text;
        case "plane":
          const plane = new PLANE(config);
          this._config.planes.push(plane);
          this.refs[config.ref] = plane;
          return plane;
        case "line":
          const line = new LINE(config);
          this._config.lines.push(line);
          this.refs[config.ref] = line;
          return line;

        default:
          break;
      }
    } else {
      console.error(
        `In schema configuration link "${
          config.ref
        }" is duplicated. ${JSON.stringify(config, null, 2)}"`
      );
    }
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

  makeConfig(): Config {
    return {
      offset: {
        x: this.bg.tilePosition.x,
        y: this.bg.tilePosition.y,
      },
      assets: this._config.assets,
      components: this._config.components.map((comp) => comp.config),
      texts: this._config.texts.map((text) => text.config),
      planes: this._config.planes.map((plane) => plane.config),
      lines: this._config.lines.map((line) => line.config),
    };
  }

  set selected(el: Base) {
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

