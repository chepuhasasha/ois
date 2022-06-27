import { Texture, utils } from "pixi.js";
import { App } from "..";
import { COMPONENT } from "../elements/component.element";
import { LINE } from "../elements/line.element";
import { PLANE } from "../elements/plane.element";
import { TEXT } from "../elements/text.element";
import {
  ComponentConfig,
  ComponentProps,
} from "../interfaces/component.interface";
import { LineConfig, LineProps } from "../interfaces/line.interface";
import { PlaneConfig, PlaneProps } from "../interfaces/plane.interface";
import { TextConfig, TextProps } from "../interfaces/text.interface";

export class ElementsService {
  public refs: {
    [key: string]: COMPONENT | LINE | TEXT | PLANE;
  } = {};
  public app: App;
  constructor(app: App) {
    this.app = app;
  }

  public add(
    type: string,
    config: ComponentConfig | TextConfig | PlaneConfig | LineConfig
  ) {
    if (!this.refs[config.ref]) {
      let el: COMPONENT | LINE | TEXT | PLANE;
      switch (type) {
        case "component":
          el = new COMPONENT(config, this.app);
          el.props = config.props as ComponentProps;
          break;
        case "text":
          el = new TEXT(config, this.app);
          el.props = config.props as TextProps;
          break;
        case "plane":
          el = new PLANE(config, this.app);
          el.props = config.props as PlaneProps;
          break;
        case "line":
          el = new LINE(config, this.app);
          el.props = config.props as LineProps;
          break;
        default:
          break;
      }
      this.refs[config.ref] = el;
      return this.refs[config.ref];
    } else {
      console.error(
        `In schema configuration link "${
          config.ref
        }" is duplicated. ${JSON.stringify(config, null, 2)}"`
      );
    }
  }

  public remove(ref: string) {
    if (this.refs[ref]) {
      this.app.container.removeChild(this.refs[ref].container);
      this.app.selected = null;
      delete this.refs[ref];
      this.app.configService.do();
    }
  }

  private getElementsOfType(type: "component" | "line" | "text" | "plane") {
    return Object.keys(this.refs)
      .filter((key) => {
        return this.refs[key].type === type;
      })
      .map((key) => this.refs[key].config);
  }

  get components(): ComponentConfig[] {
    return this.getElementsOfType("component") as ComponentConfig[];
  }

  get lines(): LineConfig[] {
    return this.getElementsOfType("line") as LineConfig[];
  }

  get texts(): TextConfig[] {
    return this.getElementsOfType("text") as TextConfig[];
  }

  get planes(): PlaneConfig[] {
    return this.getElementsOfType("plane") as PlaneConfig[];
  }

  get assets(): { name: string; data: string }[] {
    const keys: string[] = [];
    this.components.forEach((component) => {
      if (!keys.includes(component.props.name)) {
        keys.push(component.props.name);
      }
    });
    return keys.map((name) => ({
      name: name,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: utils.TextureCache["server"].baseTexture.resource.url,
    }));
  }
}
