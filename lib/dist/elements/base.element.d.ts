import { Container, InteractionEvent } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
export declare class Base {
    app: App;
    container: Container;
    isSelected: boolean;
    type: string;
    ref: string;
    _color: number;
    [key: string]: unknown;
    constructor({ ref, color, x, y }: BaseOptions, app: App);
    select(): void;
    unselect(): void;
    pointerDown(e: InteractionEvent): void;
    pointerUp(): void;
    pointerOut(): void;
    pointerMove(e: InteractionEvent): void;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set color(color: string);
}
