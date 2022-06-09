import { app } from "..";
import { IWidgetOptions } from "../helpers/widget";
import { el } from "../helpers/el";
import "./base.scss";

export const title: IWidgetOptions = {
  props: { title: "Title", subtitle: "subtitle" },
  render() {
    return el("div", { attrs: { className: "muup_base_title" } }, [
      el("span", {
        attrs: {
          className: "muup_base_title_title",
          innerText: this.props.title,
        },
      }),
      el("span", {
        attrs: {
          className: "muup_base_title_subtitle",
          innerText: this.props.subtitle,
        },
      }),
    ]);
  },
};

export const status: IWidgetOptions = {
  props: { color: "red" },
  render() {
    return el("div", { style: { background: "red" } }, [
      el("span", { attrs: { innerText: this.props.color } }),
    ]);
  },
};

export function base(muup: app) {
  muup.useWidget("Title", title);
  muup.useWidget("Status", status);
}
