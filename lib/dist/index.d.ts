import { Application, Loader, Container } from "pixi.js";
import type { Config } from "./interfaces/config.interface";
import { Base } from "./elements/base.element";
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
    private elementsService;
    private configService;
    container: Container;
    background: Background;
    private div;
    private _selected;
    private offset;
    loader: Loader;
    move: boolean;
    events: {
        select: (() => void)[];
    };
    constructor(selector: string);
    setup(): void;
    load(config: Config, cb: (ois: App) => void): this;
    scrollToSelected(d: number): void;
    private sizing;
    set config(config: Config);
    set selected(el: Base);
    get refs(): {
        [key: string]: import("./elements/component.element").COMPONENT | import("./elements/line.element").LINE | import("./elements/text.element").TEXT | import("./elements/plane.element").PLANE;
    };
    on(event: "select", cb: () => void): void;
}
export declare function create(selector: string): App;
