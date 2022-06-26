import { Application, Loader, Container } from "pixi.js";
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
import { ElementsService } from "./services/elements.service";
import { ConfigService } from "./services/config.service";
import { Background } from "./elements/background.element";
declare global {
  interface Window {
    ois: App;
  }
  interface Container {
    interactive: boolean;
  }
}
export class App extends Application {
  private offset: { x: number; y: number } = { x: 0, y: 0 };
  public elementsService = new ElementsService(this);
  private configService = new ConfigService(this);
  public container = new Container();
  private _selected: Base;
  public loader: Loader;
  private div: Element;
  public background: Background;

  constructor(selector: string) {
    super({ antialias: true, backgroundColor: 0x000000 });
    this.div = document.querySelector(selector);
    if (!this.div) {
      this.div = document.createElement("div");
      document.body.appendChild(this.div);
    }
    this.div.appendChild(this.view);
    this.loader = Loader.shared;
    return this;
  }

  setup() {
    this.background = new Background(this);
    this.stage.addChild(this.container);
    this.ticker.add(() => {
      this.sizing();
    });
  }

  load(config: Config, cb: (ois: App) => void) {
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

  public scrollToSelected(d: number) {
    if (this.background.tile.tilePosition.x > this.offset.x) {
      this.background.tile.tilePosition.x -= d * 20;
      if (this.background.tile.tilePosition.x < this.offset.x)
        this.background.tile.tilePosition.x = this.offset.x;
    }
    if (this.background.tile.tilePosition.x < this.offset.x) {
      this.background.tile.tilePosition.x += d * 20;
      if (this.background.tile.tilePosition.x > this.offset.x)
        this.background.tile.tilePosition.x = this.offset.x;
    }
    if (this.background.tile.tilePosition.y > this.offset.y) {
      this.background.tile.tilePosition.y -= d * 20;
      if (this.background.tile.tilePosition.y < this.offset.y)
        this.background.tile.tilePosition.y = this.offset.y;
    }
    if (this.background.tile.tilePosition.y < this.offset.y) {
      this.background.tile.tilePosition.y += d * 20;
      if (this.background.tile.tilePosition.y > this.offset.y)
        this.background.tile.tilePosition.y = this.offset.y;
    }
  }

  private sizing() {
    const rect = this.div.getBoundingClientRect();
    this.view.width = rect.width;
    this.view.height = rect.height;
    this.screen.width = rect.width;
    this.screen.height = rect.height;
    this.background.tile.width = rect.width;
    this.background.tile.height = rect.height;
  }

  set config(config: Config) {
    this.background.tile.tilePosition.x = config.offset.x;
    this.background.tile.tilePosition.y = config.offset.y;
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
      if (this.selected) {
        this._selected.unselect();
      }
      this._selected = el;
      this.offset = {
        x: this.screen.width / 2 - el.container.position.x,
        y: this.screen.height / 2 - el.container.position.y,
      };
    } else {
      this._selected = null;
    }
  }

  get selected() {
    return this._selected;
  }

  get refs() {
    return this.elementsService.refs;
  }

  // get tools() {
  //   return this.mouseService.tools;
  // }

  // on(event: keyof MouseService["events"], cb: (e: Base) => void) {
  //   this.mouseService.events[event].push(cb);
  // }
}

export function create(selector: string) {
  window.ois = new App(selector);
  return window.ois;
}
