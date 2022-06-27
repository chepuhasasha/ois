import { Application, Loader, Container } from "pixi.js";
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
import { ElementsService } from "./services/elements.service";
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
    private offset;
    elementsService: ElementsService;
    private configService;
    container: Container;
    private _selected;
    private copy;
    loader: Loader;
    private div;
    background: Background;
    tools: {
        edit: boolean;
        move: boolean;
        line: boolean;
    };
    constructor(selector: string);
    setup(): void;
    private keyboard;
    load(config: Config, cb: (ois: App) => void): this;
    scrollToSelected(d: number): void;
    private sizing;
    set config(config: Config);
    set selected(el: Base);
    get selected(): Base;
    get refs(): {
        [key: string]: import("./elements/component.element").COMPONENT | import("./elements/line.element").LINE | import("./elements/text.element").TEXT | import("./elements/plane.element").PLANE;
    };
}
export declare function create(selector: string): App;
