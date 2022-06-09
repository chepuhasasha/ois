import "./style/style.scss";
import { compare } from "./helpers/compare";
import { INodeOptions, node } from "./helpers/node";
import { IWidgetOptions } from "./helpers/widget";
export interface IMuupListItem {
  id: string;
  parent: string | null;
  node: node;
  data: Record<string, unknown>;
}
export class app {
  container: HTMLElement;
  private list: IMuupListItem[] = [];
  private widgets: Record<string, IWidgetOptions> = {};
  private nodes: Record<string, INodeOptions> = {};
  constructor(selector: string) {
    this.container = document.querySelector(selector);
    if (!this.container) console.error("[MUUP]: Контейнер не найден!");
  }

  tree(tree: Record<string, unknown>) {
    this.convertToList(tree);
    this.proxying();
    this.mount();
  }
  update(tree: Record<string, unknown>) {}

  convertToList(data: Record<string, unknown>, i: number = 0, parent?: string) {
    const node = this.getNodeName(data);
    if (node) {
      const listItem = {
        id: `${parent ? parent + ":" : ""}${i}`,
        parent: parent ? parent : null,
        node,
        data,
      };
      this.list.push(listItem);
      const childs = data[listItem.node.key] as Record<string, unknown>[];
      childs.forEach((child, i) => {
        this.convertToList(child, i, listItem.id);
      });
    }
    return this.list;
  }

  getNodeName(obj: Record<string, unknown>) {
    for (let name in this.nodes) {
      if (compare(this.nodes[name].model, obj)) {
        return new node(this.nodes[name], this.widgets);
      }
    }
    return null;
  }

  proxying() {
    this.list = this.list.map((node) => {
      return new Proxy(node, {
        set: (target, p: "id", value) => {
          target[p] = value;
          target.node.render(target.data);
          return true;
        },
      });
    });
  }

  mount() {
    this.list.forEach((node) => {
      this.container.appendChild(node.node.frame);
      node.node.render(node.data);
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
