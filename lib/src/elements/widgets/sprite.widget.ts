import * as PIXI from "pixi.js";

export class SPRITE extends PIXI.Container {
  private _sprite: PIXI.Sprite;
  private _offset: number;
  constructor() {
    super();
    this._offset = 10;
    this.swing();
  }

  swing() {
    let flag = false;
    window.ois.ticker.add((d) => {
      if (this._sprite) {
        if (this._sprite.position.y >= this._offset) flag = false;
        else if (this._sprite.position.y <= 0) flag = true;
        if (flag) this._sprite.position.y += d / 5;
        else this._sprite.position.y -= d / 5;
      }
    });
  }

  set texture(texture: PIXI.Texture) {
    this.removeChildren();
    this._sprite = new PIXI.Sprite(texture);
    this.addChild(this._sprite);
    this.pivot.set(this._sprite.width / 2, 0);
  }
}
