import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Stack extends _View {
  _children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this._children = children;
  }

  render() {
    const el = document.createElement("div");
    el.style.position = "relative";
    this._children.forEach((child) => {
      child._style.position = "absolute";
    });
    return super.render(el);
  }
}

export function Stack(children?: BuderWidget[]) {
  return new _Stack(children);
}
