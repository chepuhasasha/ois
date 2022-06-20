import { Graphics, TextStyle, utils, Text, Container } from "pixi.js";
import { ISchemeText } from "../interfaces/scheme.interface";
import { onDragStart, onDragEnd, onDragMove } from "./move.service";

export class MuupText extends Container {
  private Text: Text;

  constructor({ text, x, y, color, fontSize }: ISchemeText) {
    super();
    this.Text = new Text(text);
    this.x = x;
    this.y = y;
    this.color = color;
    this.fontSize = fontSize;
    this.text = text;
    this.Text.interactive = true;
    this.Text.buttonMode = true;
    this.dragging();
    this.addChild(this.Text);
    window.muup.container.addChild(this);
  }
  setup() {}
  private dragging() {
    this.Text.on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);
  }

  set text(text: string) {
    this.Text.text = text;
  }

  set x(x: number) {
    this.position.x = x;
  }
  set y(y: number) {
    this.position.y = y;
  }
  set color(color: string) {
    this.Text.style.fill = utils.string2hex(color);
  }
  set fontSize(size: number) {
    this.Text.style.fontSize = size;
  }
}
