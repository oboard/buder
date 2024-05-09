import { BuderState, type StateValue } from "../state";
import type { BuderStyle } from "../styles";
import type { BuderWidget } from "./widget";

export type BuderClassType = string | string[] | BuderState<string[]>;

export function Theme(
  theme: StateValue<Record<string, BuderClassType | BuderStyle>>,
  widget: BuderWidget
) {
  function applyTheme(widget: BuderWidget) {
    if (widget._children) {
      widget._children.forEach(applyTheme);
    }
    const type = widget._type;

    function apply(classes: BuderClassType | BuderStyle) {
      if (typeof classes === "object") {
        widget.style(classes);
      } else {
        widget.class(classes);
      }
    }
    if (type) {
      if (theme instanceof BuderState) {
        theme.init((t) => {
          apply(t[type]);
        });
      } else {
        apply(theme[type]);
      }
    }
  }
  applyTheme(widget);
  return widget;
}
