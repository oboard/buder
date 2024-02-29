import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Button extends _View {
  _type = "button";
  constructor(children: BuderWidget[] | string = []) {
    super(children);
  }

  render() {
    const el = document.createElement("button");
    return super.render(el);
  }
}

export function Button(children?: BuderWidget[] | string) {
  return new _Button(children);
}
