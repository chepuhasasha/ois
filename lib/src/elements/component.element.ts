import { Base } from "./base.element";
import {
  Graphics,
  InteractionEvent,
  Texture,
  TilingSprite,
  utils,
} from "pixi.js";
import { LABEL } from "./widgets/label.widget";
import { SPRITE } from "./widgets/sprite.widget";
import { BaseOptions } from "../interfaces/base.interface";
import {
  ComponentProps,
  ComponentConfig,
} from "../interfaces/component.interface";
import { App } from "..";

export class COMPONENT extends Base {
  private selectTile = new TilingSprite(Texture.from("select"));
  private selectGraphics = new Graphics();
  private _props: ComponentProps;
  private _sprite = new SPRITE();
  private _label = new LABEL();
  constructor(options: BaseOptions, app: App) {
    super(options, app);
    this.type = "component";
    this.app.ticker.add((d) => {
      this.selectTile.tilePosition.x += d / 6;
      this.selectTile.tilePosition.y += d / 6;
    });
  }

  private setup() {
    this._label.color = this._color;
    this.container.addChild(this._label);

    this._sprite.zIndex = 2;
    this._sprite.position.y = this._label.height + 20;
    this.container.addChild(this._sprite);

    this.circle(0, this.container.height + 20);
    this.circle(0, this.container.height + 20, this._sprite.width / 4);
    this.circle(0, this.container.height + 20, this._sprite.width / 2);
    this.container.pivot.set(0, this.container.height + 20);
  }

  public select() {
    if (super.select()) {
      this.selectTile.width = this._sprite.width + 20;
      this.selectTile.height = this._sprite.height + 20;
      this.selectTile.position.x = -this._sprite.width / 2 - 10;
      this.selectTile.position.y = this._sprite.y - 10;
      this.selectTile.tint = this._color;
      this.selectTile.alpha = 0.5;
      this.cross(this.selectTile.position.x, this.selectTile.position.y);
      this.cross(
        this.selectTile.position.x + this.selectTile.width,
        this.selectTile.position.y
      );
      this.cross(
        this.selectTile.position.x,
        this.selectTile.position.y + this.selectTile.height
      );
      this.cross(
        this.selectTile.position.x + this.selectTile.width,
        this.selectTile.position.y + this.selectTile.height
      );
      this.container.addChild(this.selectTile);
      this.container.addChild(this.selectGraphics);
      return true;
    }
    return false;
  }

  public unselect() {
    super.unselect();
    this.container.removeChild(this.selectTile);
    this.container.removeChild(this.selectGraphics);
  }

  private circle(x: number, y: number, offset: number = 0) {
    const circle = new Graphics();
    let rad = offset;
    this.app.ticker.add((d) => {
      if (rad >= this._sprite.width) {
        rad = 0;
      }
      rad += d / 2;
      const opacity = (this._sprite.width - rad) / this._sprite.width;
      circle.clear();
      circle.lineStyle(2, this._color, opacity);
      circle.beginFill(this._color, opacity - 0.1);
      circle.drawEllipse(x, y, rad, rad / 1.6);
    });
    circle.zIndex = 0;
    this.container.addChild(circle);
  }
  private cross(x: number, y: number) {
    this.selectGraphics.lineStyle(1, 0xffffff, 1);
    this.selectGraphics.moveTo(x - 6, y);
    this.selectGraphics.lineTo(x + 6, y);
    this.selectGraphics.moveTo(x, y - 6);
    this.selectGraphics.lineTo(x, y + 6);
    this.selectGraphics.tint = this._color;
  }

  pointerMove(e: InteractionEvent) {
    if (this.dragging && this.app.move && this.app.edit) {
      const newPosition = e.data.getLocalPosition(this.container.parent);
      newPosition.x = newPosition.x - this.cursor.x;
      newPosition.y =
        newPosition.y +
        (this._label.height + this._sprite.height + 30 - this.cursor.y);
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

  set props(props: ComponentProps) {
    this._props = props;
    this._sprite.texture = Texture.from(`${props.name}`);
    this._label.text = props.label;
    this.container.removeChildren();
    this.setup();
  }

  get props() {
    return this._props;
  }

  get color() {
    return utils.hex2string(this._color);
  }

  set color(color: string) {
    this._color = utils.string2hex(color);
    if (this._label) {
      this._label.color = this._color;
      this.selectTile.tint = this._color;
      this.selectGraphics.tint = this._color;
    }
  }

  get config(): ComponentConfig {
    return {
      ref: this.ref,
      color: this.color,
      x: this.x,
      y: this.y,
      zIndex: this.zIndex,
      props: this._props,
    };
  }
}
