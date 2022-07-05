import * as PIXI from "pixi.js";
export declare class SPRITE extends PIXI.Container {
    private _sprite;
    private _offset;
    constructor();
    swing(): void;
    set texture(texture: PIXI.Texture);
}
