import { Container } from "pixi.js";

export interface IWidgetOptions {
  props: {
    [key: string]: {
      type: unknown;
      default: unknown;
    };
  };
  setup: () => void;
}
export class Widget {
  map: Record<string, string>;
  props: {
    [key: string]: {
      type: unknown;
      default: unknown;
    };
  };
  container: Container;
  setup: () => void;
  constructor(options: IWidgetOptions, map: Record<string, string>) {
    this.props = options.props;
    this.setup = options.setup;
    this.map = map;
    this.container = new Container();
  }
}
