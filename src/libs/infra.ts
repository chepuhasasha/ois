import { app } from "..";
import { IWidgetOptions } from "../helpers/widget";
import { el } from "../helpers/el";

export const status: IWidgetOptions = {
  props: { color: "red" },
  render() {
    // return document.createTextNode(JSON.stringify(this.state.status));
    return el("div", { style: { background: "red" } }, [
      el("span", { attrs: { innerText: this.state.status.color } }),
    ]);
  },
};
export function infra(muup: app) {
  muup.useWidget("Status", status);
}
