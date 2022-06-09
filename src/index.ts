import "./style/style.scss";
import { compare } from "./helpers/compare";
import { INodeOptions, node } from "./helpers/node";
import { IWidgetOptions } from "./helpers/widget";
import { infra } from "./libs/infra";
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
    this.list = this.proxying(this.convertToList(tree));
    this.mount();
  }
  update(tree: Record<string, unknown>) {
    const newList = this.convertToList(tree);
    newList.forEach((item, i) => {
      if (JSON.stringify(item) != JSON.stringify(this.list[i])) {
        this.list[i].data = item.data;
      }
    });
  }

  convertToList(
    data: Record<string, unknown>,
    i: number = 0,
    list: IMuupListItem[] = [],
    parent?: string
  ) {
    const node = this.getNode(data);
    if (node) {
      const listItem = {
        id: `${parent ? parent + ":" : ""}${i}`,
        parent: parent ? parent : null,
        node,
        data,
      };
      list.push(listItem);
      const childs = data[listItem.node.key] as Record<string, unknown>[];
      childs.forEach((child, i) => {
        this.convertToList(child, i, list, listItem.id);
      });
    }
    return list;
  }

  getNode(obj: Record<string, unknown>) {
    for (let name in this.nodes) {
      if (compare(this.nodes[name].model, obj)) {
        return new node(this.nodes[name], this.widgets);
      }
    }
    return null;
  }

  proxying(list: IMuupListItem[]) {
    return list.map((node) => {
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

export function createApp(selector: string) {
  const muup = new app(selector);
  muup.use(infra);
  return muup;
}
