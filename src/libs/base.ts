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
    return el("div", {
      style: { background: this.props.color },
      attrs: { className: "muup_base_status" },
    });
  },
};

export const twoRows: IWidgetOptions = {
  props: {
    title_a: "A",
    title_b: "B",
    value_a: 0,
    value_b: 0,
    color_a: "#979CAF",
    color_b: "#979CAF",
  },
  render() {
    return el("div", { attrs: { className: "muup_base_tworows" } }, [
      el("span", {
        style: {
          color: this.props.color_a,
        },
        attrs: {
          className: "muup_base_tworows_item",
          innerText: `${this.props.title_a}:${this.props.value_a}`,
        },
      }),
      el("span", {
        style: {
          color: this.props.color_b,
        },
        attrs: {
          className: "muup_base_tworows_item",
          innerText: `${this.props.title_b}:${this.props.value_b}`,
        },
      }),
    ]);
  },
};

export function base(muup: app) {
  muup.useWidget("Title", title);
  muup.useWidget("Status", status);
  muup.useWidget("TwoRows", twoRows);
}
