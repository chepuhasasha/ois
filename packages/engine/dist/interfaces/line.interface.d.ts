import { BaseOptions } from "./base.interface";
export interface LineProps {
    width: number;
    radius: number;
    points: {
        x: number;
        y: number;
    }[];
}
export interface LineConfig extends BaseOptions {
    props: LineProps;
}
