import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Row extends _View {
  _children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this._children = children;
    this.style({ display: "flex", flexDirection: "row" });
  }
}

export function Row(children?: BuderWidget[]) {
  return new _Row(children);
}
