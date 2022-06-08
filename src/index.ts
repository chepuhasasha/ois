import { el } from "./helpers/el";
import { tree } from "./helpers/tree";
import { compare } from "./helpers/compare";

export function createApp() {
  return {
    el,
    tree,
    widgets: {},
    elements: {},
    useWidget(
      name: string,
      widget: { props: Record<string, unknown>; render: () => HTMLElement }
    ) {
      this.widgets[name] = widget;
    },
    useElement(
      name: string,
      element: {
        model: { [key: string]: unknown };
        key: string;
        widgets: { name: string; map: Record<string, string> }[];
      }
    ) {
      this.elements[name] = element;
    },
    getElementName(obj: Record<string, unknown>) {
      for (let name in this.elements) {
        if (compare(this.elements[name].model, obj)) {
          return name;
        }
      }
    },
    mount(selector: string) {
      this.container = document.querySelector(selector);
      console.log(this.getElementName(this.tree));
      // if (container) container.appendChild();
    },
  };
}
