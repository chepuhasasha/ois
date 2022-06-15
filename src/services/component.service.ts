import { Texture, AnimatedSprite } from "pixi.js";
import { ISchemeComponent } from "../interfaces/scheme.interface";

export type IComponentStatus = "ok" | "warn" | "critical" | "error" | "default";

export class Component {
  sprite: AnimatedSprite | null = null;
  options: ISchemeComponent;
  constructor(options: ISchemeComponent) {
    this.options = options;
    this.setup();
  }
  setup() {
    this.sprite = new AnimatedSprite(this.getTextures("default"));
    this.sprite.anchor.set(0.5, 1);
    this.sprite.play();
    this.sprite.animationSpeed = 0.2;
    this.sprite.position.set(this.options.x, this.options.y);
    window.muup.stage.addChild(this.sprite);
  }

  getTextures(status: IComponentStatus) {
    const textures = [];
    for (let i = 0; i <= 7; i++) {
      const texture = Texture.from(
        `${this.options.component}_${status}${i}.png`
      );
      textures.push(texture);
    }
    for (let i = 7; i > 0; i--) {
      const texture = Texture.from(
        `${this.options.component}_${status}${i}.png`
      );
      textures.push(texture);
    }
    return textures;
  }
  setStatus(status: IComponentStatus) {
    this.sprite.textures = this.getTextures(status);
    this.sprite.play();
  }
}
