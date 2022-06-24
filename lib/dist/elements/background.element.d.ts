import { TilingSprite, InteractionEvent } from "pixi.js";
import { App } from "..";
export declare class Background {
    private app;
    tile: TilingSprite;
    private start;
    private dragging;
    constructor(app: App);
    pointerDown(e: InteractionEvent): void;
    pointerUp(e: InteractionEvent): void;
    pointerOut(e: InteractionEvent): void;
    pointerMove(e: InteractionEvent): void;
}
