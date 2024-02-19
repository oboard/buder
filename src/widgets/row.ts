import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Row extends _View {
  children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this.children = children;
  }

  render() {
    const el = document.createElement("div");
    el.style.display = "flex";
    el.style.flexDirection = "row";
    return super.render(el);
  }
}

export function Row(children?: BuderWidget[]) {
  return new _Row(children);
}
