import { Container, Texture, Sprite, InteractionEvent } from "pixi.js";
import { Base } from "../base.element";

export class MENU extends Container {
  private delete: Sprite = new Sprite(Texture.from("deleteBTN"));
  private copy: Sprite = new Sprite(Texture.from("copyBTN"));
  private point: Sprite = new Sprite(Texture.from("pointBTN"));
  private settings: Sprite = new Sprite(Texture.from("settingsBTN"));
  private el: Base;
  constructor(offset: number = 20, el: Base) {
    super();
    this.el = el;
    this.zIndex = 10;
    this.pivot.set(this.delete.width / 2 + offset, -this.delete.height);

    this.point.anchor.set(0.5, 0.5);
    this.delete.anchor.set(0.5, 0.5);
    this.copy.anchor.set(0.5, 0.5);
    this.settings.anchor.set(0.5, 0.5);
    this.point.interactive = true;
    this.delete.interactive = true;
    this.copy.interactive = true;
    this.settings.interactive = true;

    this.point.on("pointerover", () => this.hover(this.point));
    this.delete.on("pointerover", () => this.hover(this.delete));
    this.copy.on("pointerover", () => this.hover(this.copy));
    this.settings.on("pointerover", () => this.hover(this.settings));
    this.point.on("pointerout", () => this.unhover(this.point));
    this.delete.on("pointerout", () => this.unhover(this.delete));
    this.copy.on("pointerout", () => this.unhover(this.copy));
    this.settings.on("pointerout", () => this.unhover(this.settings));

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

    this.copy.y = this.point.height;
    this.settings.y = this.point.height * 2;
    this.delete.y = this.point.height * 3;
  }

  hover(e: Sprite) {
    e.scale.set(0.9, 0.9);
  }
  unhover(e: Sprite) {
    e.scale.set(1, 1);
  }
  close() {
    this.removeChild(this.point);
    this.removeChild(this.delete);
    this.removeChild(this.copy);
    this.removeChild(this.settings);
  }
  open() {
    this.addChild(this.point);
    this.addChild(this.delete);
    this.addChild(this.copy);
    this.addChild(this.settings);
  }
}
