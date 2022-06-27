import { App } from "..";
import { Config } from "../interfaces/config.interface";
export declare class ConfigService {
    app: App;
    history: Config[];
    private index;
    constructor(app: App);
    do(): void;
    undo(): void;
    get config(): Config;
}
