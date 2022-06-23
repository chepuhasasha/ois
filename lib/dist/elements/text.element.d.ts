import { BaseOptions } from "../interfaces/base.interface";
import { TextConfig, TextProps } from "../interfaces/text.interface";
import { Base } from "./base.element";
export declare class TEXT extends Base {
    private _text;
    private _props;
    constructor(options: BaseOptions);
    private setup;
    set props(props: TextProps);
    set text(text: string);
    get props(): TextProps;
    get color(): string;
    set color(color: string);
    get config(): TextConfig;
}
