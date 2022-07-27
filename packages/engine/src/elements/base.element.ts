import { Container, InteractionEvent, IPointData, utils } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { MENU } from "./widgets/menu.widget";

export class Base {
  app: App;
  container = new Container();
  isSelected: boolean = false;
  menu: MENU;
  type: string;
  cursor: { x: number; y: number } = { x: 0, y: 0 };
  ref: string;
  _color: number;
  start: IPointData;
  end: IPointData;
  [key: string]: unknown;
  constructor({ ref, color, x, y, zIndex }: BaseOptions, app: App) {
    this.app = app;
    this.x = x;
    this.y = y;
    this.ref = ref;
    this.color = color;
    this.zIndex = zIndex;
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this.container
      // TODO необходим общий сервис обработки событий, через него необходимо организовать применение инструментов
      .on("pointerdown", (e) => this.pointerDown(e))
      .on("pointerup", (e) => this.pointerUp(e))
      .on("pointerupoutside", (e) => this.pointerOut(e))
      .on("pointermove", (e) => this.pointerMove(e));
    this.menu = new MENU(this);
    this.app.container.addChild(this.menu);
    this.app.container.addChild(this.container);
  }
  select() {
    if (this.app.selected != this) {
      this.app.selected = this;
      this.menu.open();
      this.app.events["select"].forEach((cb) => cb(this));
      return true;
    }
    return false;
  }
  unselect() {
    this.menu.close();
  }
  pointerDown(e: InteractionEvent) {
    this.start = e.data.getLocalPosition(this.container.parent);
    this.container.alpha = 0.8;
    this.dragging = true;
    this.cursor = e.data.getLocalPosition(this.container);
    // this.container.zIndex = Object.keys(this.app.elementsService.refs).length;
  }
  pointerUp(e: InteractionEvent) {
    this.container.alpha = 1;
    this.dragging = false;
    if (this.start && this.start.x != this.x && this.start.y != this.y) {
      this.app.configService.do();
    }
    this.end = e.data.getLocalPosition(this.container.parent);
    this.select();
  }
  pointerOut(e: InteractionEvent) {
    this.container.alpha = 1;
    this.dragging = false;
    // this.app.configService.do();
    this.end = e.data.getLocalPosition(this.container.parent);
    this.select();
  }
  pointerMove(e: InteractionEvent) {
    if (this.dragging && this.app.move && this.app.edit) {
      const newPosition = e.data.getLocalPosition(this.container.parent);
      // this.x = newPosition.x - this.cursor.x;
      // this.y = newPosition.y - this.cursor.y;
      newPosition.x = newPosition.x - this.cursor.x;
      newPosition.y = newPosition.y - this.cursor.y;
      if (newPosition.x - this.x >= 25) {
        this.x += 25;
      } else if (newPosition.x - this.x <= -25) {
        this.x -= 25;
      }
      if (newPosition.y - this.y >= 15) {
        this.y += 15;
      } else if (newPosition.y - this.y <= -15) {
        this.y -= 15;
      }
      this.menu.position.set(this.x, this.y);
    }
  }

  get x() {
    return this.container.position.x;
  }
  set x(x: number) {
    this.container.position.x = x;
  }
  get y() {
    return this.container.position.y;
  }
  set y(y: number) {
    this.container.position.y = y;
  }
  set color(color: string) {
    this._color = utils.string2hex(color);
  }
  set zIndex(i: number) {
    this.container.zIndex = i;
  }
  get zIndex() {
    return this.container.zIndex;
  }
}
