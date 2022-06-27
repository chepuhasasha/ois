import { App } from "..";
import { Config } from "../interfaces/config.interface";
export declare class ConfigService {
    app: App;
    history: Config[];
    constructor(app: App);
    do(): void;
    undo(): void;
    get config(): Config;
}
