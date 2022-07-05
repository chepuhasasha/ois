import * as PIXI from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { MENU } from "./widgets/menu.widget";
export declare class Base {
    app: App;
    container: PIXI.Container;
    isSelected: boolean;
    menu: MENU;
    type: string;
    cursor: {
        x: number;
        y: number;
    };
    ref: string;
    _color: number;
    start: PIXI.IPointData;
    end: PIXI.IPointData;
    [key: string]: unknown;
    constructor({ ref, color, x, y, zIndex }: BaseOptions, app: App);
    select(): boolean;
    unselect(): void;
    pointerDown(e: PIXI.InteractionEvent): void;
    pointerUp(e: PIXI.InteractionEvent): void;
    pointerOut(e: PIXI.InteractionEvent): void;
    pointerMove(e: PIXI.InteractionEvent): void;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set color(color: string);
    set zIndex(i: number);
    get zIndex(): number;
}
