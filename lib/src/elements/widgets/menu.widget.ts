import * as PIXI from "pixi.js";
import { Base } from "../base.element";

export class MENU extends PIXI.Container {
  private delete: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from("deleteBTN"));
  private copy: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from("copyBTN"));
  private point: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from("pointBTN"));
  private settings: PIXI.Sprite = new PIXI.Sprite(
    PIXI.Texture.from("settingsBTN")
  );
  private up: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from("upBTN"));
  private down: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from("downBTN"));
  private el: Base;
  constructor(el: Base) {
    super();
    this.el = el;

    this.point.anchor.set(0.5, 0.5);
    this.delete.anchor.set(0.5, 0.5);
    this.copy.anchor.set(0.5, 0.5);
    this.settings.anchor.set(0.5, 0.5);
    this.up.anchor.set(0.5, 0.5);
    this.down.anchor.set(0.5, 0.5);
    this.point.interactive = true;
    this.delete.interactive = true;
    this.copy.interactive = true;
    this.settings.interactive = true;
    this.up.interactive = true;
    this.down.interactive = true;
    this.point.buttonMode = true;
    this.delete.buttonMode = true;
    this.copy.buttonMode = true;
    this.settings.buttonMode = true;
    this.up.buttonMode = true;
    this.down.buttonMode = true;

    this.point.on("pointerover", () => this.hover(this.point));
    this.point.on("pointerout", () => this.unhover(this.point));
    this.delete.on("pointerover", () => this.hover(this.delete));
    this.delete.on("pointerout", () => this.unhover(this.delete));
    this.copy.on("pointerout", () => this.unhover(this.copy));
    this.copy.on("pointerover", () => this.hover(this.copy));
    this.settings.on("pointerover", () => this.hover(this.settings));
    this.settings.on("pointerout", () => this.unhover(this.settings));
    this.up.on("pointerover", () => this.hover(this.up));
    this.up.on("pointerout", () => this.unhover(this.up));
    this.down.on("pointerover", () => this.hover(this.down));
    this.down.on("pointerout", () => this.unhover(this.down));

    this.point.on("pointerup", () => {
      this.el.app.offset = {
        x: this.el.app.screen.width / 2 - this.el.container.position.x,
        y: this.el.app.screen.height / 2 - this.el.container.position.y,
      };
    });

    this.delete.on("pointerup", () => {
      this.el.app.elementsService.remove(this.el.ref);
    });

    this.copy.on("pointerup", () => {
      this.el.app.setCopy();
      this.el.app.paste();
    });
    this.up.on("pointerup", () => {
      this.el.zIndex += 1;
    });
    this.down.on("pointerup", () => {
      this.el.zIndex -= 1;
    });

    this.copy.y = 0;
    this.settings.y = this.point.height;
    this.delete.y = this.point.height * 2;
    this.point.y = 0;
    this.point.x = -this.point.height;
    this.up.y = this.point.height;
    this.up.x = -this.point.height;
    this.down.y = this.point.height * 2;
    this.down.x = -this.point.height;
  }

  hover(e: PIXI.Sprite) {
    e.scale.set(0.9, 0.9);
  }
  unhover(e: PIXI.Sprite) {
    e.scale.set(1, 1);
  }
  close() {
    this.removeChild(this.point);
    this.removeChild(this.delete);
    this.removeChild(this.copy);
    this.removeChild(this.settings);
    this.removeChild(this.up);
    this.removeChild(this.down);
  }
  open() {
    if (this.el.app.edit) {
      this.addChild(this.point);
      this.addChild(this.delete);
      this.addChild(this.copy);
      this.addChild(this.settings);
      this.addChild(this.up);
      this.addChild(this.down);
      this.point.x = -this.point.height;
      this.pivot.set(this.point.height / 2, this.height - 20);
    } else {
      this.addChild(this.point);
      this.point.x = 0;
      this.pivot.set(0, 0);
    }
    this.zIndex = this.el.app.container.children.length;
    this.position.set(this.el.x, this.el.y);
  }
}
