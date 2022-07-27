import { Graphics, Text, TextStyle, Container } from "pixi.js";

export class LABEL extends Container {
  private _color: number;
  private _text: string = "";
  private _labelText: Text;
  private _label = new Graphics();
  private _style = new TextStyle({
    letterSpacing: 1,
    fontSize: 14,
    fill: "#A2A3A7",
    wordWrap: true,
    wordWrapWidth: 100,
    lineJoin: "round",
  });
  constructor() {
    super();
    this._labelText = new Text("", this._style);
    this._labelText.x = 16;
    this._labelText.y = 4;
    this.addChild(this._label);
    this.addChild(this._labelText);
    this.draw();
  }

  private draw() {
    this._label.clear();
    this._label.beginFill(this._color);
    this._label.drawRect(0, 0, 6, this._labelText.height + 10);
    this._label.endFill();
    this._label.lineStyle(1, this._color, 0.5);
    this._label.beginFill(0x000000, 1);
    this._label.drawRect(
      6,
      0,
      this._labelText.width + 20,
      this._labelText.height + 10
    );
    this._label.endFill();
  }

  set color(color: number) {
    this._color = color;
    this.draw();
  }
  set text(text: string) {
    this._text = "";
    let acc = 0;
    text.split("").forEach((s) => {
      if (acc < 20) {
        acc += 1;
        this._text += s;
      } else {
        acc = 0;
        this._text += " ";
      }
    }, 0);
    this._labelText.text = this._text;
    this.draw();
  }
}
