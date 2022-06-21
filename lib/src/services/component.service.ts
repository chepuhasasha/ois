import { Base, BaseOptions } from "./base.service";
import { Texture, Container, Graphics, utils } from "pixi.js";
import { ISchemeComponent } from "../interfaces/scheme.interface";
import { Label } from "./label.service";
import { onDragStart, onDragEnd, onDragMoveStep } from "./move.service";
import { MuupSprite } from "./sprite.service";

// @ts-ignore
export class Component extends Base {
  constructor(options: BaseOptions) {
    super(options);
  }

  private setup() {}
}
