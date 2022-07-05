import * as PIXI from "pixi.js";
export declare class LABEL extends PIXI.Container {
    private _color;
    private _text;
    private _labelText;
    private _label;
    private _style;
    constructor();
    private draw;
    set color(color: number);
    set text(text: string);
}
