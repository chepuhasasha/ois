import { Sprite, Container } from "pixi.js";
import { Base } from "../base.element";
export declare class MENU extends Container {
    private delete;
    private copy;
    private point;
    private settings;
    private up;
    private down;
    private el;
    constructor(el: Base);
    hover(e: Sprite): void;
    unhover(e: Sprite): void;
    close(): void;
    open(): void;
}
