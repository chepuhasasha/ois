import { Container, Sprite } from "pixi.js";
import { Base } from "../base.element";
export declare class MENU extends Container {
    private delete;
    private copy;
    private point;
    private settings;
    private el;
    constructor(offset: number, el: Base);
    hover(e: Sprite): void;
    unhover(e: Sprite): void;
    close(): void;
    open(): void;
}
