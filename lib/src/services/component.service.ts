import { Texture, AnimatedSprite } from "pixi.js";
import { ISchemeComponent } from "../interfaces/scheme.interface";
import { onDragStart, onDragEnd, onDragMove } from "./move.service";

export type IComponentStatus = "ok" | "warn" | "critical" | "error" | "default";

interface MuupSprite extends AnimatedSprite {
  interactive: boolean;
  buttonMode: boolean;
  on: (name: string, cb: (e: any) => void) => MuupSprite;
}
export class Component {
  sprite: MuupSprite | null = null;
  options: ISchemeComponent;
  constructor(options: ISchemeComponent) {
    this.options = options;
    this.setup();
  }
  setup() {
    this.sprite = new AnimatedSprite(this.getTextures("default")) as MuupSprite;
    this.sprite.anchor.set(0.5, 1);
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.play();
    this.sprite.animationSpeed = 0.2;
    this.sprite.position.set(this.options.x, this.options.y);
    window.muup.stage.addChild(this.sprite);

    this.sprite
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);
  }

  getTextures(status: IComponentStatus) {
    const textures = [];
    for (let i = 0; i <= 3; i++) {
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
