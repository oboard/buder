import { BuderState } from "../state";
import { BuderWidget } from "./widget";

export type BuderClassType = string | string[] | BuderState<string[]>;

export function Theme(
  theme: Record<string, BuderClassType>,
  widget: BuderWidget
) {
  console.log(theme);
  function applyTheme(widget: BuderWidget) {
    if (widget._children) {
      widget._children.forEach(applyTheme);
    }
    const type = widget._type;
    if (type) {
      const classes = theme[type];
      if (classes) {
        widget.class(classes);
      }
    }
  }
  applyTheme(widget);
  return widget;
}
