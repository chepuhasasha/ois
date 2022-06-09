export interface IWidgetOptions {
  props: Record<string, unknown>;
  render: () => HTMLElement;
}

export class widget {
  props: IWidgetOptions["props"];
  render: IWidgetOptions["render"];
  state: Record<string, unknown>;
  constructor(options: IWidgetOptions, data: Record<string, unknown>) {
    this.state = data;
    this.props = options.props;
    this.render = options.render;
    this.render.bind(this);
  }
}
