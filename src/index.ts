import { IWidgetOptions } from "./services/widget.service";
import "./style/main.scss";
import {
  Component,
  IComponentData,
  IComponentOptions,
} from "./services/component.service";
import { Block, IBlockGroup } from "./services/block.service";
import { ITree, Tree } from "./services/tree.service";
import { compare } from "./helpers/compare";
import { base } from "./libs/base";

export class App {
  container: HTMLDivElement;
  widgets: Record<string, IWidgetOptions> = {};
  components: Record<string, IComponentOptions> = {};
  gridLayout: { el: Block | Tree | Component; area: string }[];
  constructor(selector: string) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      this.container = document.createElement("div");
      document.body.appendChild(this.container);
    } else this.container.className = "muup";
  }

  /**
   * Регистрация виджета
   * @param {string} name - Название виджета
   * @param {IWidgetOptions} widget - Конфигурация виджета
   * ```
   * muup.useWidget('Status', {...})
   * ```
   */
  useWidget(name: string, widget: IWidgetOptions) {
    this.widgets[name] = widget;
    return this;
  }
  /**
   * Регистрация компонента
   * @param {string} name - Название компонента
   * @param {IComponentOptions} component - Конфигурация компонента
   * ```
   * muup.useComponent('Node', {...})
   * ```
   */
  useComponent(name: string, component: IComponentOptions) {
    this.components[name] = component;
    return this;
  }
  use(plugin: (muup: App, options?: unknown) => void) {
    plugin(this);
  }

  component(name: string) {
    return new Component(this.components[name]);
  }

  block(title: string) {
    return new Block(title);
  }

  tree() {
    return new Tree();
  }

  grid(
    layout: { el: Block | Tree | Component; area: string }[],
    rows: number,
    cols: number
  ) {
    this.gridLayout = layout;
    this.container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    this.container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    this.gridLayout.forEach((node) => {
      node.el.container.style.gridArea = node.area;
      this.container.appendChild(node.el.container);
    });
    return;
  }
}

export function createApp(selector: string) {
  window.muup = new App(selector);
  window.muup.use(base);
  return window.muup;
}
