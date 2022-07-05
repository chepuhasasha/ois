import { Base } from "./base.element";
import {
  Graphics,
  InteractionData,
  Texture,
  TilingSprite,
  utils,
} from "pixi.js";
import { BaseOptions } from "../interfaces/base.interface";
import { PlaneProps, PlaneConfig } from "../interfaces/plane.interface";
import { App } from "..";

export class PLANE extends Base {
  private _plane: Graphics = new Graphics();
  private _planeTile = new TilingSprite(Texture.from("select"));
  private _props: PlaneProps;
  private point = new Graphics();

  constructor(options: BaseOptions, app: App) {
    super(options, app);
    this.container.addChild(this._plane);
    this.point.interactive = true;
    this.type = "plane";
    this.app.ticker.add((d) => {
      this._planeTile.tilePosition.x += d / 2;
    });
    this.dragPoint();
  }

  private setup() {
    const rad = (31 * Math.PI) / 180;
    const a = this._props.h * Math.sin(rad);
    const b = this._props.h * Math.cos(rad);
    const A = this._props.w * Math.sin(rad);
    const B = this._props.w * Math.cos(rad);
    this._plane.clear();
    this._plane.beginFill(this._color, 0.04);
    this._plane.lineStyle(2, this._color, 0.5);
    this._plane.moveTo(0, 0);
    this._plane.lineTo(b, -a);
    this._plane.lineTo(b + B, -a + A);
    this._plane.lineTo(B, A);
    this._plane.closePath();
    this._plane.endFill();
    this._planeTile.x = b;
    this._planeTile.y = -a;
    this._planeTile.width = this._props.w;
    this._planeTile.height = this._props.h;
    this._planeTile.tileScale.set(1.5, 1.5);
    this._planeTile.tint = this._color;
    this._planeTile.alpha = 0.4;
    this._planeTile.skew.set(-1.03, (31 * Math.PI) / 180);
    this.container.addChild(this._planeTile);
    this.point.position.set(b + B, -a + A);
  }

  select() {
    if (super.select()) {
      this.container.addChild(this.point);
      return true;
    }
    return false;
  }
  unselect() {
    super.unselect();
    this.container.removeChild(this.point);
  }

  dragPoint() {
    this.point.lineStyle(2, 0xffffff, 0.3);
    this.point.moveTo(0, 0);
    this.point.lineTo(0, -20);
    this.point.lineStyle(0, 0);
    this.point.beginFill(0xffffff, 0.2);
    this.point.drawEllipse(0, 0, 25, 25 / 1.6);
    this.point.endFill();
    let data: InteractionData;
    let drag = false;
    let start: { x: number; y: number } = { x: 0, y: 0 };
    this.point
      .on("pointerdown", (e) => {
        data = e.data;
        drag = true;
        this.app.move = false;
        this.start = data.getLocalPosition(this.point.parent);
        this.setup();
      })
      .on("pointerup", () => {
        drag = false;
        this.app.move = true;
        this.app.configService.do();
      })
      .on("pointerupoutside", () => {
        drag = false;
        this.app.move = true;
        this.app.configService.do();
      })
      .on("pointermove", () => {
        if (drag) {
          const end = data.getLocalPosition(this.point.parent);
          if (end.x - start.x > 0 || end.y - start.y > 0) {
            this.props.h += 1;
            this.props.w += 1;
          } else {
            this.props.h -= 1;
            this.props.w -= 1;
          }
          start = end;
          // newp.x = newp.x - (newp.x % 25);
          // newp.y = newp.y - (newp.y % 15);
          // const rad = (31 * Math.PI) / 180;
          // this.props.w += 1;
          // this.props.h += 1;
          this.setup();
        }
      });
  }

  set props(props: PlaneProps) {
    this._props = props;
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
    if (this._plane) {
      this.setup();
    }
  }

  get config(): PlaneConfig {
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
