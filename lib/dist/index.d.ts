import { Application, Loader, IApplicationOptions, TilingSprite, Container } from "pixi.js";
import type { BaseOptions } from "./interfaces/base.interface";
import type { Config } from "./interfaces/config.interface";
import { COMPONENT } from "./elements/component.element";
import { LINE } from "./elements/line.element";
import { PLANE } from "./elements/plane.element";
import { TEXT } from "./elements/text.element";
import { Base } from "./elements/base.element";
declare global {
    interface Window {
        muup: App;
    }
    interface Container {
        interactive: boolean;
    }
}
export declare class App extends Application {
    private _selected;
    private offset;
    bg: TilingSprite;
    loader: Loader;
    editable: boolean;
    container: Container;
    move: boolean;
    private _config;
    refs: {
        [key: string]: COMPONENT | LINE | TEXT | PLANE;
    };
    constructor(selector: string, options: IApplicationOptions);
    setup(): void;
    load(config: Config, cb: (muup: App) => void, editable?: boolean): this;
    set config(config: Config);
    private scrollToSelected;
    add(type: string, config: BaseOptions): COMPONENT | TEXT | PLANE | LINE;
    remove(ref: string): void;
    use(plugin: (muup: App) => void): void;
    makeConfig(): Config;
    set selected(el: Base);
}
export declare function create(selector: string, options: IApplicationOptions): App;
