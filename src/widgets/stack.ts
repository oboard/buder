import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Stack extends _View {
  _children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this._children = children;
    this._children.forEach((child) => {
      child._style.position = "absolute";
    });
    this.style({position: "relative"})
  }
}

export function Stack(children?: BuderWidget[]) {
  return new _Stack(children);
}
