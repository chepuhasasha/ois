import { App } from "../..";
import { el } from "../../helpers/el";
import { IWidgetOptions } from "../../services/widget.service";
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

export function base(muup: App) {
  muup.useWidget("Title", title);
}
