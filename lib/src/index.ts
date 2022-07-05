import * as PIXI from "pixi.js";
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
import { ElementsService } from "./services/elements.service";
import { ConfigService } from "./services/config.service";
import { Background } from "./elements/background.element";
import { ComponentConfig } from "./interfaces/component.interface";
import { baseAssets } from "./assets/base";
declare global {
  interface Window {
    ois: App;
  }
  interface Container {
    interactive: boolean;
  }
}
export class App extends PIXI.Application {
  public offset: { x: number; y: number } = { x: 0, y: 0 };
  public elementsService = new ElementsService(this);
  public configService = new ConfigService(this);
  public container = new PIXI.Container();
  private _selected: Base;
  public copy: Base;
  public loader: PIXI.Loader;
  private div: Element;
  public background: Background;
  public _edit: boolean = true;
  public move: boolean = true;

  constructor(selector: string) {
    super({ antialias: true, backgroundColor: 0x000000 });
    this.div = document.querySelector(selector);
    if (!this.div) {
      this.div = document.createElement("div");
      document.body.appendChild(this.div);
    }
    this.div.appendChild(this.view);
    this.loader = PIXI.Loader.shared;
    this.container.sortableChildren = true;
    this.keyboard();
    return this;
  }

  setup() {
    this.background = new Background(this);
    this.stage.addChild(this.container);
    this.ticker.add(() => {
      this.sizing();
    });
  }

  private keyboard() {
    document.addEventListener("keydown", (e) => {
      if (this.edit && e.code === "Delete" && this.selected) {
        this.elementsService.remove(this.selected.ref);
      }
      if (e.code === "KeyC" && e.ctrlKey && this._selected) {
        this.setCopy();
      }
      if (e.code === "KeyV" && e.ctrlKey && this.copy) {
        this.paste();
      }
      if (e.code === "KeyZ" && e.ctrlKey) {
        this.configService.undo();
      }
    });
  }
  setCopy() {
    this.copy = this.selected;
  }
  paste() {
    this.copy = this.elementsService.add(this.copy.type, {
      ...(this.copy.config as ComponentConfig),
      x: this.copy.x + 100,
      ref: this.copy.ref + Date.now(),
    });
    this.configService.do();
  }

  load(config: Config, cb: (ois: App) => void) {
    baseAssets.forEach((sprite) => {
      this.loader.add(sprite.name, sprite.data);
    });
    config.assets.forEach((sprite) => {
      this.loader.add(sprite.name, sprite.data);
    });
    this.loader.load(() => {
      this.setup();
      this.config = config;
      this.configService.do();
      cb(this);
    });
    return this;
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
    this.offset = config.offset;
    // this.background.tile.tilePosition.x = config.offset.x;
    // this.background.tile.tilePosition.y = config.offset.y;
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
    if (this._selected) this._selected.unselect();
    if (el) {
      this._selected = el;
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

  set edit(edit: boolean) {
    this._edit = edit;
    if (this.selected) {
      this.selected.menu.close();
    }
  }

  get edit() {
    return this._edit;
  }
}

export function create(selector: string) {
  window.ois = new App(selector);
  return window.ois;
}
