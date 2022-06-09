export interface IWidgetOptions {
  props: Record<string, unknown>;
  render: () => HTMLElement | Text;
}

export class widget {
  props: IWidgetOptions["props"];
  render: IWidgetOptions["render"];
  state: Record<string, unknown>;
  constructor(options: IWidgetOptions) {
    this.props = options.props;
    this.render = options.render;
    this.render.bind(this);
  }
}
