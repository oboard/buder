import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Button extends _View {
  children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this.children = children;
  }

  render() {
    const el = document.createElement("button");
    return super.render(el);
  }
}

export function Button(children?: BuderWidget[]) {
  return new _Button(children);
}
