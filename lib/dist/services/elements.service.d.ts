import { COMPONENT } from "../elements/component.element";
import { LINE } from "../elements/line.element";
import { PLANE } from "../elements/plane.element";
import { TEXT } from "../elements/text.element";
import { ComponentConfig } from "../interfaces/component.interface";
import { LineConfig } from "../interfaces/line.interface";
import { PlaneConfig } from "../interfaces/plane.interface";
import { TextConfig } from "../interfaces/text.interface";
export declare class ElementsService {
    refs: {
        [key: string]: COMPONENT | LINE | TEXT | PLANE;
    };
    add(type: string, config: ComponentConfig | TextConfig | PlaneConfig | LineConfig): COMPONENT | LINE | TEXT | PLANE;
    remove(ref: string): void;
}
