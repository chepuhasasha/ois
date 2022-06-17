import {
  Texture,
  Sprite,
  Container,
  Graphics,
  Text,
  TextStyle,
  utils,
} from "pixi.js";
import { ISchemeComponent } from "../interfaces/scheme.interface";
import { Label } from "./label.service";
import { onDragStart, onDragEnd, onDragMove } from "./move.service";
import { MuupSprite } from "./sprite.service";

// @ts-ignore
interface MuupContainer extends Container {
  interactive: boolean;
  buttonMode: boolean;
  on: (name: string, cb: (e: any) => void) => MuupContainer;
}
export class Component {
  container = new Container() as MuupContainer;
  private _x: number;
  private _y: number;
  private _ref: string;
  private _label: string;
  private _color: number;
  private _component: string;
  private _width: number;
  private _height: number;
  private LABEL: Label;
  private SPRITE: MuupSprite;
  constructor({ ref, component, color, x, y, label }: ISchemeComponent) {
    this.x = x;
    this.y = y;
    this._ref = ref;
    this.label = label;
    this.color = color ? color : "#33343E";
    this.component = component;
    this.setup();
  }
  setup() {
    this.LABEL = new Label(this._label, this._color);
    this.SPRITE = new MuupSprite(Texture.from(`${this._component}.png`));
    this.SPRITE.pivot.set(this.SPRITE.width / 2, 0);
    this.SPRITE.position.y = this.LABEL.height + 10;
    this.SPRITE.position.x = this.LABEL.width / 2;
    this.SPRITE.zIndex = 2;

    this.container.addChild(this.LABEL);
    this.container.addChild(this.SPRITE);

    this.dragging();
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this._width = this.container.width;
    this._height = this.container.height;
    this.container.pivot.set(this._width / 2, this._height + 20);
    this.container.position.set(this._x, this._y);

    this.circle(this._width / 2, this._height + 20);
    this.circle(this._width / 2, this._height + 20, 30);
    this.circle(this._width / 2, this._height + 20, 60);

    window.muup.stage.addChild(this.container);
  }

  circle(x: number, y: number, offset: number = 0) {
    const circle = new Graphics();
    let rad = offset;
    window.muup.ticker.add((d) => {
      if (rad >= this._width) {
        rad = 0;
      }
      rad += d / 2;
      let opacity = (this.SPRITE.width - rad) / this.SPRITE.width;
      circle.clear();
      circle.lineStyle(2, this._color, opacity);
      circle.beginFill(this._color, opacity - 0.1);
      circle.drawEllipse(x, y, rad, rad / 1.6);
    });
    circle.zIndex = 0;
    this.container.addChild(circle);
  }

  dragging() {
    this.container
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);
  }

  set x(x: number) {
    this._x = x;
  }
  set y(y: number) {
    this._y = y;
  }
  set label(label: string) {
    this._label = label;
    if (this.LABEL) this.LABEL.text = label;
  }
  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this.LABEL) this.LABEL.color = this._color;
  }
  set component(name: string) {
    this._component = name;
  }
}
