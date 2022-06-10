import { compare } from "../helpers/compare";
import { Component } from "./component.service";

export interface IBlockGroup {
  name: string;
  components: [];
  childs?: IBlockGroup[];
}

export class Block {
  data: {
    value: IBlockGroup[];
  };
  container: HTMLDivElement = document.createElement("div");
  body: HTMLElement = document.createElement("div");
  header: HTMLElement = document.createElement("div");
  constructor(title = "Untitled") {
    this.data = this.proxy({ value: [] });
    this.header.innerText = title;
    this.layout();
  }

  layout() {
    this.container.className = "muup_block";
    this.header.className = "muup_block_header";
    this.body.className = "muup_block_body";
    this.container.appendChild(this.header);
    this.container.appendChild(this.body);
  }

  render() {
    this.data.value.forEach((g) => {
      const group = document.createElement("div");
      group.className = "muup_block_group";
      g.components.forEach((component) => {
        const comp = this.getComponent(component);
        comp.data.value = component;
        if (comp) {
          group.appendChild(comp.container);
        }
      });
      this.body.innerHTML = "";
      this.body.appendChild(group);
    });
  }

  getComponent(data: Record<string, unknown>) {
    for (const name in window.muup.components) {
      if (compare(window.muup.components[name].model, data)) {
        return new Component(window.muup.components[name]);
      }
    }
    return null;
  }

  proxy(data: { value: IBlockGroup[] }) {
    return new Proxy(data, {
      set: (target, p, value) => {
        target[p as "value"] = value;
        this.render();
        return target[p as "value"] === value;
      },
    });
  }
}
