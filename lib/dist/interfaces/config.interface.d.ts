import type { COMPONENT } from "../elements/component.element";
import type { LINE } from "../elements/line.element";
import type { PLANE } from "../elements/plane.element";
import type { TEXT } from "../elements/text.element";
import type { ComponentConfig } from "./component.interface";
import type { LineConfig } from "./line.interface";
import type { PlaneConfig } from "./plane.interface";
import type { TextConfig } from "./text.interface";
export interface Config {
    offset: {
        x: number;
        y: number;
    };
    assets: {
        name: string;
        data: string;
    }[];
    components: ComponentConfig[];
    texts: TextConfig[];
    planes: PlaneConfig[];
    lines: LineConfig[];
}
export interface AppConfig {
    offset: {
        x: number;
        y: number;
    };
    assets: {
        name: string;
        data: string;
    }[];
    components: COMPONENT[];
    texts: TEXT[];
    planes: PLANE[];
    lines: LINE[];
}
