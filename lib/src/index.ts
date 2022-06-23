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
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
import { ElementsService } from "./services/elements.service";
import { ConfigService } from "./services/config.service";
declare global {
  interface Window {
    ois: App;
  }
  interface Container {
    interactive: boolean;
  }
}
export class App extends Application {
  public container = new Container();
  private elementsService = new ElementsService();
  private configService = new ConfigService();
  private _selected: Base;
  private offset: { x: number; y: number } = { x: 0, y: 0 };
  public bg: TilingSprite;
  public loader: Loader;
  public editable: boolean = false;
  move: boolean = true;

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
      .on("pointerdown", (e) => {
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

  load(config: Config, cb: (ois: App) => void, editable?: boolean) {
    if (editable) {
      this.editable = true;
    }
    config.assets.forEach((sprite) => {
      this.loader.add(sprite.name, sprite.data);
    });
    this.loader.load(() => {
      this.setup();
      this.config = config;
      cb(this);
    });
    return this;
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

  set config(config: Config) {
    this.bg.tilePosition.x = config.offset.x;
    this.bg.tilePosition.y = config.offset.y;
    this.elementsService.refs = {};
    this.container.removeChildren();
    config.planes.forEach((plane) => {
      this.elementsService.add("plane", plane);
    });
    config.lines.forEach((line) => {
      this.elementsService.add("line", line);
    });
    config.components.forEach((component) => {
      this.elementsService.add("component", component);
    });
    config.texts.forEach((text) => {
      this.elementsService.add("text", text);
    });
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

  get refs() {
    return this.elementsService.refs;
  }

  use(plugin: (ois: App) => void) {
    plugin(this);
  }
}

export function create(selector: string, options: IApplicationOptions) {
  window.ois = new App(selector, options);
  return window.ois;
}
