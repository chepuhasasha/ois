import "./style/style.scss";
import { compare } from "./helpers/compare";
import { INodeOptions, node } from "./helpers/node";
import { IWidgetOptions } from "./helpers/widget";
import { base } from "./libs/base";
import { el } from "./helpers/el";
export interface IMuupListItem {
  node: node;
  area: string;
  data: Record<string, unknown>;
}
export class app {
  container: HTMLElement;
  private list: IMuupListItem[] = [];
  private widgets: Record<string, IWidgetOptions> = {};
  private nodes: Record<string, INodeOptions> = {};
  el = el;
  constructor(selector: string) {
    this.container = document.querySelector(selector);
    if (!this.container) console.error("[MUUP]: Контейнер не найден!");
    else this.container.className = "muup";
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
    list: IMuupListItem[] = [],
    area: { y: number; x: number; _y: number; _x: number } = {
      y: 1,
      x: 1,
      _y: 2,
      _x: 2,
    }
  ) {
    const node = this.getNode(data);
    if (node) {
      const listItem = {
        area: `${area.y}/${area.x}/${area._y}/${area._x}`,
        node,
        data,
      };
      list.push(listItem);
      const childs = data[listItem.node.key] as Record<string, unknown>[];
      childs.forEach((child, i) => {
        this.convertToList(child, list, {
          y: area.y + i,
          x: area.x + 1,
          _y: area.y + i + 1,
          _x: area.x + 2,
        });
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
    this.list.forEach((node, i) => {
      node.node.render(node.data);
      this.container.appendChild(node.node.frame);
      node.node.frame.style.gridArea = node.area;
      // if (node.parent) {
      //   const parent = this.list.find((el) => el.id === node.parent);
      //   const rect = parent.node.frame.getBoundingClientRect();
      //   node.node.frame.style.left = rect.width + rect.x + 50 + "px";
      //   if (this.list[i - 1].parent === node.parent) {
      //     const rect = this.list[i - 1].node.frame.getBoundingClientRect();
      //     node.node.frame.style.top = rect.height + rect.y + 50 + "px";
      //   }
      // }
      // console.log(node.node.frame.getBoundingClientRect());
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
  muup.use(base);
  return muup;
}
