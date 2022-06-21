import { Texture, Container, Graphics, utils } from "pixi.js";
import { ISchemeComponent } from "../interfaces/scheme.interface";
import { Label } from "./label.service";
import { onDragStart, onDragEnd, onDragMoveStep } from "./move.service";
import { MuupSprite } from "./sprite.service";

// @ts-ignore
export class Component {
  container = new Container() as Container;
  public ref: string;
  private _x: number;
  private _y: number;
  private _label: string;
  private _color: number;
  private _component: string;
  private LABEL: Label;
  private SPRITE: MuupSprite;
  constructor({ ref, component, color, x, y, label }: ISchemeComponent) {
    this.x = x;
    this.y = y;
    this.ref = ref;
    this.label = label;
    this.color = color ? color : "#33343E";
    this.component = component;
    this.setup();
  }
  private setup() {
    this.LABEL = new Label(this._label, this._color);
    this.SPRITE = new MuupSprite(Texture.from(`${this._component}.png`));
    this.SPRITE.pivot.set(this.SPRITE.width / 2, 0);
    this.SPRITE.position.y = this.LABEL.height + 10;
    this.SPRITE.zIndex = 2;

    this.container.addChild(this.LABEL);
    this.container.addChild(this.SPRITE);

    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this.container.pivot.set(0, this.container.height + 20);
    this.container.position.set(this._x, this._y);
    this.circle(0, this.container.height + 20);
    this.circle(0, this.container.height + 20, this.SPRITE.width / 4);
    this.circle(0, this.container.height + 20, this.SPRITE.width / 2);
    this.container.on("pointerup", () => (window.muup.selected = this));
    if (window.muup.editable) this.dragging();
    window.muup.container.addChild(this.container);
  }

  private circle(x: number, y: number, offset: number = 0) {
    const circle = new Graphics();
    let rad = offset;
    window.muup.ticker.add((d) => {
      if (rad >= this.SPRITE.width) {
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

  private dragging() {
    this.container
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMoveStep);
  }
  select() {
    window.muup.selected = this;
  }

  get x() {
    return this.container.position.x;
  }
  set x(x: number) {
    this._x = x;
  }
  get y() {
    return this.container.position.y;
  }
  set y(y: number) {
    this._y = y;
  }
  get label() {
    return this._label;
  }
  set label(label: string) {
    this._label = label;
    if (this.LABEL) this.LABEL.text = label;
  }
  get color() {
    return utils.hex2string(this._color);
  }
  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this.LABEL) this.LABEL.color = this._color;
  }
  get component() {
    return this._component;
  }
  set component(name: string) {
    this._component = name;
  }
}
