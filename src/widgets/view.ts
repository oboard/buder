import { BuderWidget } from "./widget";

export type ChildrenProps = BuderWidget[] | string[];

// View is a widget that contains other widgets.
export class _View extends BuderWidget {
  constructor(children?: ChildrenProps) {
    super();

    if (children && typeof children[0] === "string") {
      this.text(children[0]);
    } else {
      // @ts-ignore
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

export function View(...children: BuderWidget[]) {
  return new _View(children);
}
