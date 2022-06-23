import { Container } from "pixi.js";
import { BaseOptions } from "../interfaces/base.interface";
export declare class Base {
    container: Container;
    ref: string;
    _color: number;
    [key: string]: unknown;
    constructor({ ref, color, x, y }: BaseOptions);
    select(): void;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set color(color: string);
}
