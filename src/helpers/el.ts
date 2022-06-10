export function el(
  tag: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
  options?: {
    style?: {
      [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key];
    };
    attrs?: {
      [key in keyof HTMLElement]?: HTMLElement[key];
    };
  },
  childs?: HTMLElement[]
): HTMLElement {
  const element = document.createElement(tag);
  if (options) {
    if (options.style) {
      for (const key in options.style) {
        element.style[key] = options.style[key];
      }
    }
    if (options.attrs) {
      for (const key in options.attrs) {
        element[key as "innerText"] = options.attrs[key as "innerText"];
      }
    }
  }
  if (childs) {
    childs.forEach((el) => element.appendChild(el));
  }
  return element;
}
