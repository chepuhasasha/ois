import { App } from "..";
import { ElementsService } from "./elements.service";
export declare class ConfigService {
    app: App;
    constructor(app: App);
    makeConfig(refs: ElementsService["refs"]): void;
}
