import { App } from "..";
import { BaseOptions } from "../interfaces/base.interface";
import { LineProps, LineConfig } from "../interfaces/line.interface";
import { Base } from "./base.element";
export declare class LINE extends Base {
    private _line;
    private _props;
    private editPoints;
    private selectedPoint;
    constructor(options: BaseOptions, app: App);
    private pointInLine;
    private segments;
    private drawLine;
    private addEditPoints;
    private point;
    private removePoints;
    private pointDown;
    private pointUp;
    private pointMove;
    private pointOut;
    private centerDown;
    select(): boolean;
    unselect(): void;
    set props(props: LineProps);
    get props(): LineProps;
    get color(): string;
    set color(color: string);
    get config(): LineConfig;
}
