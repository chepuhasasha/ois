import { Container, InteractionEvent, IPointData } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { MENU } from "./widgets/menu.widget";
export declare class Base {
    app: App;
    container: Container;
    isSelected: boolean;
    menu: MENU;
    type: string;
    cursor: {
        x: number;
        y: number;
    };
    ref: string;
    _color: number;
    start: IPointData;
    end: IPointData;
    [key: string]: unknown;
    constructor({ ref, color, x, y }: BaseOptions, app: App);
    select(): void;
    unselect(): void;
    pointerDown(e: InteractionEvent): void;
    pointerUp(e: InteractionEvent): void;
    pointerOut(e: InteractionEvent): void;
    pointerMove(e: InteractionEvent): void;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set color(color: string);
}
