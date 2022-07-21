import { Graphics } from "pixi.js";
import { App } from "..";
import { Base } from "../elements/base.element";
export declare class MouseService {
    stroke: Graphics;
    selected: Base;
    app: App;
    tools: {
        edit: boolean;
        move: boolean;
        line: boolean;
        add: boolean;
    };
    events: {
        select: ((e: Base | null) => void)[];
    };
    constructor(app: App);
    delete(e: KeyboardEvent): void;
    draw(): void;
}
