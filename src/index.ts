import { compare } from "./helpers/compare";
import { INodeOptions, node } from "./helpers/node";
import { IWidgetOptions, widget } from "./helpers/widget";

export class app {
  container: HTMLElement;
  muupTree: Record<string, unknown>;
  private widgets: Record<string, IWidgetOptions> = {};
  private nodes: Record<string, INodeOptions> = {};
  constructor(selector: string) {
    this.muupTree = {};
    this.container = document.querySelector(selector);
    if (!this.container) console.error("[MUUP]: Контейнер не найден!");
  }

  tree(tree: Record<string, unknown>) {
    this.muupTree = this.proxying(this.parse(tree));
  }

  parse(tree: Record<string, unknown>) {
    return tree;
  }

  getNodeName(obj: Record<string, unknown>) {
    for (let name in this.nodes) {
      if (compare(this.nodes[name].model, obj)) {
        return name;
      }
    }
  }

  proxying(data: Record<string, unknown>) {
    if (typeof data === "object") {
      for (let key in data) {
        data[key] = this.proxying(data[key] as Record<string, unknown>);
      }
      return new Proxy(data, {
        get: (target, p) => {
          return target[p as string];
        },
        set: (target, p, value) => {
          if (typeof value === "object") {
            target[p as string] = this.proxying(value);
            return true;
          }
          target[p as string] = value;
          return true;
        },
      });
    }
    return data;
  }

  update(tree: Record<string, unknown>) {}

  /**
   * Регистрация виджетов
   * @param {string} name - Название виджета
   * @param {IWidgetOptions} widget - Конфигурация виджета
   */
  useWidget(name: string, widget: IWidgetOptions) {
    this.widgets[name] = widget;
  }
  /**
   * Регистрация узлов
   * @param {string} name - Название узла
   * @param {INodeOptions} widget - Конфигурация узла
   */
  useNode(name: string, element: INodeOptions) {
    this.nodes[name] = element;
  }
  /**
   * Регистрация плагина
   * @param {(app: app) => void} plugin - Плагин
   */
  use(plugin: (app: app) => void) {
    plugin(this);
  }
}
