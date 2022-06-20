import { Graphics, TextStyle, utils, Text, Container } from "pixi.js";
import { ISchemeText } from "../interfaces/scheme.interface";
import { onDragStart, onDragEnd, onDragMove } from "./move.service";

export class MuupText extends Container {
  private Text: Text;
  container = new Container();

  constructor({ text, x, y, color, fontSize, skew, fontWidth }: ISchemeText) {
    super();
    this.Text = new Text(text);
    if (skew) {
      this.Text.skew.set(-1, (31 * Math.PI) / 180);
    }
    if (fontWidth) {
      this.Text.style.fontWeight = fontWidth;
    }
    this.x = x;
    this.y = y;
    this.color = color;
    this.fontSize = fontSize;
    this.text = text;
    this.Text.interactive = true;
    this.Text.buttonMode = true;
    if (window.muup.editable) this.dragging();
    this.container.addChild(this.Text);
    window.muup.container.addChild(this.container);
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
    this.container.position.x = x;
  }
  set y(y: number) {
    this.container.position.y = y;
  }
  set color(color: string) {
    this.Text.style.fill = utils.string2hex(color);
  }
  set fontSize(size: number) {
    this.Text.style.fontSize = size;
  }
}
