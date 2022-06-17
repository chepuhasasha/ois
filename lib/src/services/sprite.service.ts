import { Container, Texture, Sprite } from "pixi.js";

export class MuupSprite extends Container {
  private _sprite: Sprite;
  private _offset: number = 10;
  constructor(texture: Texture) {
    super();
    this._sprite = new Sprite(texture);
    this.addChild(this._sprite);
    this.swing();
  }

  swing() {
    let flag = false;
    window.muup.ticker.add((d) => {
      if (this._sprite.position.y >= this._offset) {
        flag = false;
      } else if (this._sprite.position.y <= 0) {
        flag = true;
      }
      if (flag) this._sprite.position.y += d / 5;
      else this._sprite.position.y -= d / 5;
    });
  }

  set texture(texture: Texture) {
    this._sprite.texture = texture;
  }
}
