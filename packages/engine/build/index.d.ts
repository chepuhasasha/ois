import { Application } from "pixi.js";
import { Mover } from "./layers/mover.layer";
import { Points } from "./layers/points.layer";
import { Viewer } from "./layers/viewer.layer";
import { Factory } from "./services/factory.service";
export declare class Engine extends Application {
    FACTORY: Factory;
    VIEWER: Viewer;
    MOVER: Mover;
    POINTS: Points;
    constructor(FACTORY?: Factory);
    private bootstrap;
}
