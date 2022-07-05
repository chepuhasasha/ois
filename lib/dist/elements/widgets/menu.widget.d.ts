import * as PIXI from "pixi.js";
import { Base } from "../base.element";
export declare class MENU extends PIXI.Container {
    private delete;
    private copy;
    private point;
    private settings;
    private up;
    private down;
    private el;
    constructor(el: Base);
    hover(e: PIXI.Sprite): void;
    unhover(e: PIXI.Sprite): void;
    close(): void;
    open(): void;
}
