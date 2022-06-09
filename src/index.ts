import { compare } from "./helpers/compare";
import { INodeOptions, node } from "./helpers/node";
import { IWidgetOptions, widget } from "./helpers/widget";

export class app {
  container: HTMLElement;
  private muupTree: Record<string, unknown> = {};
  private muupList: {
    node: Record<string, unknown>;
    data: Record<string, unknown>;
  }[] = [];
  private widgets: Record<string, IWidgetOptions> = {};
  private nodes: Record<string, INodeOptions> = {};
  constructor(selector: string) {
    this.container = document.querySelector(selector);
    if (!this.container) console.error("[MUUP]: Контейнер не найден!");
  }

  tree(tree: Record<string, unknown>) {
    this.convertToList(tree);
    this.proxying();
    console.log(this.muupList);
  }
  update(tree: Record<string, unknown>) {}

  convertToList(data: Record<string, unknown>, i: number = 0, parent?: string) {
    const node = this.getNodeName(data);
    if (node) {
      node.id = `${parent ? parent + ":" : ""}${i}`;
      node.parent = parent ? parent : null;
      const newData = { ...data };
      delete newData[node.node.key];
      this.muupList.push({ node, data: newData });
      const childs = data[node.node.key] as Record<string, unknown>[];
      childs.forEach((child, i) => {
        this.convertToList(child, i, node.id);
      });
    }
    return this.muupList;
  }

  getNodeName(obj: Record<string, unknown>) {
    for (let name in this.nodes) {
      if (compare(this.nodes[name].model, obj)) {
        return {
          id: "0",
          parent: "0",
          node: this.nodes[name],
          data: {},
        };
      }
    }
    return null;
  }

  proxying() {
    this.muupList = this.muupList.map((node) => {
      return {
        node: node.node,
        data: new Proxy(node.data, {
          get: (target, p) => {
            return target[p as string];
          },
          set: (target, p, value) => {
            target[p as string] = value;
            return true;
          },
        }),
      };
    });
  }

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
