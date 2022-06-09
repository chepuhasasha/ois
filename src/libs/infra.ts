import { app } from "..";
import { IWidgetOptions } from "../helpers/widget";

export const status: IWidgetOptions = {
  props: { color: "red" },
  render() {
    return document.createTextNode(JSON.stringify(this.state.status));
    // return muup.el("div", { style: { background: this.state.color } }, [
    //   muup.el("span", { attrs: { innerText: "test" } }),
    // ]);
  },
};
export function infra(muup: app) {
  muup.useWidget("Status", status);
}
