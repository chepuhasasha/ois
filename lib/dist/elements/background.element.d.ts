import * as PIXI from "pixi.js";
import { App } from "..";
export declare class Background {
    private app;
    tile: PIXI.TilingSprite;
    private start;
    private dragging;
    constructor(app: App);
    moveToOffset(d: number): void;
    pointerDown(e: PIXI.InteractionEvent): void;
    pointerUp(): void;
    pointerMove(e: PIXI.InteractionEvent): void;
}
