import { BuderWidget } from "./base/widget";

class _View extends BuderWidget {
  children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this.children = children;
  }

  render() {
    const el = document.createElement("div");
    this.children.forEach((child) => {
      el.appendChild(child.render());
    });
    return el;
  }
}

export function View(children?: BuderWidget[]) {
  return new _View(children);
}
