import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Stack extends _View {
  children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this.children = children;
  }

  render() {
    const el = document.createElement("div");
    el.style.position = "relative";
    this.children.forEach((child) => {
      child._style.position = "absolute";
    });
    return super.render(el);
  }
}

export function Stack(children?: BuderWidget[]) {
  return new _Stack(children);
}
