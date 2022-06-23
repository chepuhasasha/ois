import { Application, Loader, IApplicationOptions, TilingSprite, Container } from "pixi.js";
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
declare global {
    interface Window {
        ois: App;
    }
    interface Container {
        interactive: boolean;
    }
}
export declare class App extends Application {
    container: Container;
    private elementsService;
    private configService;
    private _selected;
    private offset;
    bg: TilingSprite;
    loader: Loader;
    editable: boolean;
    move: boolean;
    constructor(selector: string, options: IApplicationOptions);
    setup(): void;
    load(config: Config, cb: (ois: App) => void, editable?: boolean): this;
    private scrollToSelected;
    set config(config: Config);
    set selected(el: Base);
    get refs(): {
        [key: string]: import("./elements/component.element").COMPONENT | import("./elements/line.element").LINE | import("./elements/text.element").TEXT | import("./elements/plane.element").PLANE;
    };
    use(plugin: (ois: App) => void): void;
}
export declare function create(selector: string, options: IApplicationOptions): App;
