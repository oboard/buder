import { BuderWidget } from "./widget";

// View is a widget that contains other widgets.
export class _View extends BuderWidget {
  children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this.children = children;
  }

  render(el?: HTMLElement): HTMLElement {
    if (!el) {
      el = document.createElement("div");
    }
    this.children.forEach((child) => {
      el.appendChild(child.render());
    });
    return super.render(el);
  }
}

export function View(children?: BuderWidget[]) {
  return new _View(children);
}
