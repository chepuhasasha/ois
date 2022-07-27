import { Base } from "./base.element";
import { BaseOptions } from "../interfaces/base.interface";
import { PlaneProps, PlaneConfig } from "../interfaces/plane.interface";
import { App } from "..";
export declare class PLANE extends Base {
    private _plane;
    private _planeTile;
    private _props;
    private point;
    constructor(options: BaseOptions, app: App);
    private setup;
    select(): boolean;
    unselect(): void;
    dragPoint(): void;
    set props(props: PlaneProps);
    get props(): PlaneProps;
    get color(): string;
    set color(color: string);
    get config(): PlaneConfig;
}
