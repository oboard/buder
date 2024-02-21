import { BuderWidget } from "./widget";

// View is a widget that contains other widgets.
export class _View extends BuderWidget {
  _children?: BuderWidget[];

  constructor(children: string | BuderWidget[] = []) {
    super();

    if (typeof children === "string") {
      this.text(children);
    } else {
      this._children = children;
    }
  }

  render(el?: HTMLElement): HTMLElement {
    if (!el) {
      el = document.createElement("div");
    }
    this._children?.forEach((child) => {
      el?.appendChild(child.render());
    });
    return super.render(el);
  }
}

export function View(children?: BuderWidget[]) {
  return new _View(children);
}
