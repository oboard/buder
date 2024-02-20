import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Col extends _View {
  _children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this._children = children;
    this.style({ display: "flex", flexDirection: "column" });
  }
}

export function Col(children?: BuderWidget[]) {
  return new _Col(children);
}
