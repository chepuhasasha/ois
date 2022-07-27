import { BaseOptions } from "./base.interface";
export interface ComponentProps {
    name: string;
    label: string;
}
export interface ComponentConfig extends BaseOptions {
    props: ComponentProps;
}
