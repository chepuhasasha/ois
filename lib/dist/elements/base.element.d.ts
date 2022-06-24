import { Container } from "pixi.js";
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
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set color(color: string);
}
