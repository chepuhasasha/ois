export interface ITree {
  data: string;
}

export class Tree {
  container: HTMLDivElement = document.createElement("div");
  constructor() {
    this.container.className = "muup_tree";
  }

  proxy() {}

  mount() {}
}
