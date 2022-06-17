import { Graphics, TextStyle, utils, Text, Container } from "pixi.js";

export class Label extends Container {
  private _color: number;
  private _text: string = "";
  private _labelText: Text;
  _label = new Graphics();
  _style = new TextStyle({
    letterSpacing: 1,
    fontSize: 14,
    fill: "#A2A3A7",
    wordWrap: true,
    wordWrapWidth: 100,
    lineJoin: "round",
  });
  constructor(text: string, color: number) {
    super();
    this._labelText = new Text(this._text, this._style);
    this.color = color;
    this.text = text;
    this._labelText.x = 4;
    this._labelText.y = 10;
    this.addChild(this._label);
    this.addChild(this._labelText);
    this.draw();
  }

  draw() {
    this._label.drawRect(0, 6, 100, this._labelText.height + 14);
    this._label.addChild(this._labelText);
    this._label.clear();
    this._label.beginFill(this._color);
    this._label.drawRect(0, 0, 100, 4);
    this._label.endFill();
    this._label.lineStyle(1, 0xffffff, 0.1);
    this._label.beginFill(0x11121b, 0.5);
    this._label.drawRect(0, 4, 100, this._labelText.height + 10);
    this._label.endFill();
  }

  set color(color: number) {
    this._color = color;
    this.draw();
  }
  set text(text: string) {
    let acc = 0;
    text.split("").forEach((s) => {
      if (acc < 7) {
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
