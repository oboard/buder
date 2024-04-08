import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Stack extends _View {
  constructor(children: BuderWidget[] = []) {
    super(children);
    this._children?.forEach((child) => {
      child.style({ position: "absolute" });
    });
    this.style({ position: "relative" });
  }
}

export function Stack(children?: BuderWidget[]) {
  return new _Stack(children);
}
