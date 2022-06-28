import { Base } from "./base.element";
import { InteractionEvent } from "pixi.js";
import { BaseOptions } from "../interfaces/base.interface";
import { ComponentProps, ComponentConfig } from "../interfaces/component.interface";
import { App } from "..";
export declare class COMPONENT extends Base {
    private selectTile;
    private selectGraphics;
    private _props;
    private _sprite;
    private _label;
    constructor(options: BaseOptions, app: App);
    private setup;
    select(): boolean;
    unselect(): void;
    private circle;
    private cross;
    pointerMove(e: InteractionEvent): void;
    set props(props: ComponentProps);
    get props(): ComponentProps;
    get color(): string;
    set color(color: string);
    get config(): ComponentConfig;
}
