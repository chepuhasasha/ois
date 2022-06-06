import { App, MuupPlugin } from "..";

export const Status = {
  props: {
    color: {
      type: String,
      default: "red",
    },
  },
  setup() {
    console.log(this.props.color);
  },
};

export const BaseMuupWidgets: MuupPlugin = {
  install(app: App) {
    app.useWidget("Status", Status);
  },
};
