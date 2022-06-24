import { Base } from "./base.element";
import { BaseOptions } from "../interfaces/base.interface";
import { ComponentProps, ComponentConfig } from "../interfaces/component.interface";
import { App } from "..";
export declare class COMPONENT extends Base {
    private _props;
    private _sprite;
    private _label;
    constructor(options: BaseOptions, app: App);
    private setup;
    private circle;
    set props(props: ComponentProps);
    get props(): ComponentProps;
    get color(): string;
    set color(color: string);
    get config(): ComponentConfig;
}
