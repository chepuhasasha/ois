import { Texture, Sprite, Container, Graphics, Text, TextStyle } from "pixi.js";
import { ISchemeComponent } from "../interfaces/scheme.interface";
import { onDragStart, onDragEnd, onDragMove } from "./move.service";

// @ts-ignore
interface MuupContainer extends Container {
  interactive: boolean;
  buttonMode: boolean;
  on: (name: string, cb: (e: any) => void) => MuupContainer;
}
export class Component {
  sprite: Sprite | null = null;
  container = new Container() as MuupContainer;
  options: ISchemeComponent;
  color: number = 0xff0000;
  constructor(options: ISchemeComponent) {
    this.options = options;
    this.setup();
  }
  setup() {
    // SPRITE
    this.addSprite();

    // LABEL
    this.addLabel();

    this.dragging();
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.sortableChildren = true;
    this.container.pivot.set(
      this.container.width / 2,
      this.container.height + 20
    );
    this.container.position.set(this.options.x, this.options.y);
    this.addCircle(this.container.width / 2, this.container.height + 20);
    this.addCircle(this.container.width / 2, this.container.height + 20, 30);
    this.addCircle(this.container.width / 2, this.container.height + 20, 60);

    window.muup.stage.addChild(this.container);
  }

  addLabel() {
    let text: string = "";
    let acc = 0;
    this.options.label.split("").forEach((s) => {
      if (acc < 7) {
        acc += 1;
        text += s;
      } else {
        acc = 0;
        text += " ";
      }
    }, 0);
    const style = new TextStyle({
      // fontFamily: "Arial",
      letterSpacing: 1,
      fontSize: 14,
      fill: "#A2A3A7",
      wordWrap: true,
      wordWrapWidth: 100,
      lineJoin: "round",
    });

    const labelText = new Text(text, style);
    labelText.x = 4;
    labelText.y = 10;
    labelText.zIndex = 3;

    const label = new Graphics();
    label.zIndex = 99;
    this.container.addChild(label);
    label.drawRect(0, 6, 100, labelText.height + 14);
    label.addChild(labelText);

    window.muup.ticker.add(() => {
      label.clear();
      label.beginFill(this.color);
      label.drawRect(0, 0, 100, 4);
      label.endFill();
      label.lineStyle(1, 0xffffff, 0.1);
      label.beginFill(0x11121b, 0.5);
      label.drawRect(0, 4, 100, labelText.height + 10);
      label.endFill();
    });
  }

  addCircle(x: number, y: number, offset: number = 0) {
    const circle = new Graphics();
    let rad = offset;
    window.muup.ticker.add((d) => {
      if (rad >= 100) {
        rad = 0;
      }
      rad += d / 2;
      let opacity = (100 - rad) / 100;
      circle.clear();
      circle.lineStyle(2, this.color, opacity);
      circle.beginFill(this.color, opacity - 0.1);
      circle.drawEllipse(x, y, rad, rad / 1.6);
    });
    circle.zIndex = 0;
    this.container.addChild(circle);
  }

  addSprite() {
    this.sprite = new Sprite(Texture.from(`${this.options.component}.png`));
    this.sprite.pivot.set(0, -40);
    this.sprite.zIndex = 1;
    this.container.addChild(this.sprite);
  }

  dragging() {
    this.container
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);
  }
}
