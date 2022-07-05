import { Container, Texture } from "pixi.js";
export declare class SPRITE extends Container {
    private _sprite;
    private _offset;
    constructor();
    swing(): void;
    set texture(texture: Texture);
}
