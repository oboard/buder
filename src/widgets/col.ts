import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Col extends _View {
  _children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this._children = children;
  }

  render() {
    const el = document.createElement("div");
    el.style.display = "flex";
    el.style.flexDirection = "column";
    return super.render(el);
  }
}

export function Col(children?: BuderWidget[]) {
  return new _Col(children);
}
