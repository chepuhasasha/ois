import { Base } from "./base.element";
import { BaseOptions } from "../interfaces/base.interface";
import { PlaneProps, PlaneConfig } from "../interfaces/plane.interface";
export declare class PLANE extends Base {
    private _plane;
    private _props;
    constructor(options: BaseOptions);
    private setup;
    set props(props: PlaneProps);
    get props(): PlaneProps;
    get color(): string;
    set color(color: string);
    get config(): PlaneConfig;
}
