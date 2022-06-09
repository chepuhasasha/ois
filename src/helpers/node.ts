export interface INodeOptions {
  key: string;
  model: Record<string, unknown>;
  widgets: { name: string; map: Record<string, string> }[];
}

export class node {
  frame: HTMLDivElement;
  model: INodeOptions["model"];
  widgets: INodeOptions["widgets"];
  key: INodeOptions["key"];
  constructor(options: INodeOptions) {
    this.key = options.key;
    this.model = options.model;
    this.widgets = options.widgets;
    this.frame = document.createElement("div");
    this.frame.className = "muup_node";
  }

  render(data: Record<string, unknown>) {}
}
