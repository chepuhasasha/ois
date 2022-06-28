import { TilingSprite, InteractionEvent } from "pixi.js";
import { App } from "..";
export declare class Background {
    private app;
    tile: TilingSprite;
    private start;
    private dragging;
    constructor(app: App);
    moveToOffset(d: number): void;
    pointerDown(e: InteractionEvent): void;
    pointerUp(): void;
    pointerMove(e: InteractionEvent): void;
}
