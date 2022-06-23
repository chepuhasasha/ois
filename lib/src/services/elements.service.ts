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

  public add(
    type: string,
    config: ComponentConfig | TextConfig | PlaneConfig | LineConfig
  ) {
    if (!this.refs[config.ref]) {
      let el: COMPONENT | LINE | TEXT | PLANE;
      switch (type) {
        case "component":
          el = new COMPONENT(config);
          el.props = config.props as ComponentProps;
          break;
        case "text":
          el = new TEXT(config);
          el.props = config.props as TextProps;
          break;
        case "plane":
          el = new PLANE(config);
          el.props = config.props as PlaneProps;
          break;
        case "line":
          el = new LINE(config);
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
      window.ois.container.removeChild(this.refs[ref].container);
      delete this.refs[ref];
    }
  }
}
