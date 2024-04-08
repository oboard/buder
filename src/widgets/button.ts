import { _View, ChildrenProps } from "./view";

export class _Button extends _View {
  _type = "button";
  constructor(children: ChildrenProps = []) {
    super(children);
  }

  render() {
    const el = document.createElement("button");
    return super.render(el);
  }
}

export function Button(...children: ChildrenProps) {
  return new _Button(children);
}
