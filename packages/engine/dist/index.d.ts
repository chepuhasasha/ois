import { Application, Container, Loader } from "pixi.js";
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
import { ElementsService } from "./services/elements.service";
import { ConfigService } from "./services/config.service";
import { Background } from "./elements/background.element";
declare global {
    interface Window {
        ois: App;
    }
    interface Container {
        interactive: boolean;
    }
}
export declare class App extends Application {
    offset: {
        x: number;
        y: number;
    };
    elementsService: ElementsService;
    configService: ConfigService;
    container: Container;
    private _selected;
    copy: Base;
    loader: Loader;
    private div;
    background: Background;
    _edit: boolean;
    move: boolean;
    events: {
        select: ((el: Base) => void)[];
    };
    constructor(selector: string);
    setup(): void;
    private keyboard;
    setCopy(): void;
    paste(): void;
    load(config: Config, cb: (ois: App) => void): this;
    private sizing;
    set config(config: Config);
    set selected(el: Base);
    get selected(): Base;
    get refs(): {
        [key: string]: import("./elements/component.element").COMPONENT | import("./elements/line.element").LINE | import("./elements/text.element").TEXT | import("./elements/plane.element").PLANE;
    };
    set edit(edit: boolean);
    get edit(): boolean;
    on(event: keyof App["events"], cb: (el: Base) => void): void;
}
export declare function create(selector: string): App;
