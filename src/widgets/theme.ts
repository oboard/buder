import { BuderState, StateValue } from "../state";
import { BuderWidget } from "./widget";

export type BuderClassType = string | string[] | BuderState<string[]>;

export function Theme(
  theme: StateValue<Record<string, BuderClassType>>,
  widget: BuderWidget
) {
  function applyTheme(widget: BuderWidget) {
    if (widget._children) {
      widget._children.forEach(applyTheme);
    }
    const type = widget._type;

    function apply(classes: BuderClassType) {
      if (classes) {
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
