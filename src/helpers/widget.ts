export interface IWidgetOptions {
  props: Record<string, unknown>;
  render: () => HTMLElement;
}

export class widget {
  props: IWidgetOptions["props"];
  render: IWidgetOptions["render"];
  constructor(options: IWidgetOptions) {
    this.props = options.props;
    this.render = options.render;
  }
}
