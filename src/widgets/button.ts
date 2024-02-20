import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Button extends _View {

  constructor(children: BuderWidget[] | string = []) {
    super();
    if (typeof children === "string") {
      this.text(children);
    } else {
      this._children = children;
    }
  }

  render() {
    const el = document.createElement("button");
    return super.render(el);
  }
}

export function Button(children?: BuderWidget[] | string) {
  return new _Button(children);
}
