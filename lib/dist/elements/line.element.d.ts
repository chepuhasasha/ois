import { Graphics } from "pixi.js";
import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { LineProps, LineConfig } from "../interfaces/line.interface";
import { Base } from "./base.element";
export declare class LINE extends Base {
    private _line;
    private _props;
    private selected;
    constructor(options: BaseOptions, app: App);
    private pointInLine;
    private segments;
    private setup;
    private addPoints;
    dragPoint(p: Graphics, point: {
        x: number;
        y: number;
    }): void;
    select(): void;
    unselect(): void;
    set props(props: LineProps);
    get props(): LineProps;
    get color(): string;
    set color(color: string);
    get config(): LineConfig;
}
