import { Base } from "../elements/base.element";
import { Container } from "pixi.js";

export class MouseService {
  private selected: Base;
  public tool: string;
  constructor(private container: Container) {
    console.log(this.container);
    this.container.on("pointerdown", () => {
      this.selected = null;
    });
    // .on("pointerdown", onDragStart)
    // .on("pointerup", onDragEnd)
    // .on("pointerupoutside", onDragEnd)
    // .on("pointermove", onDragMoveMap);
  }
}
