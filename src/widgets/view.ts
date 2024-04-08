import { BuderState, StateValue } from "../state";
import { _Text } from "./text";
import { BuderWidget, diffApply } from "./widget";

export type ChildrenProps = StateValue<BuderWidget | any>[] | string[];

// View is a widget that contains other widgets.
export class _View extends BuderWidget {
  constructor(children?: ChildrenProps) {
    super();

    if (children && typeof children[0] === "string") {
      this.text(children[0]);
    } else {
      this._children = children;
    }
  }

  render(el?: HTMLElement): HTMLElement {
    if (!el) {
      el = document.createElement("div");
    }
    this._children?.forEach((child) => {
      if (child instanceof BuderState) {
        const childValue = child.value;
        if (childValue instanceof BuderWidget) {
          child.init((v: BuderWidget) => {
            const rendered = v.render();
            if (childValue._instanceElement) {
              diffApply(childValue._instanceElement, rendered);
            } else {
              childValue._instanceElement = rendered;
              el?.appendChild(rendered);
            }
          });
        }
      } else {
        // add to parent dom

        if (child.render instanceof Function) {
          el?.appendChild(child.render());
        }
      }
    });
    return super.render(el);
  }
}

export function View(...children: ChildrenProps) {
  return new _View(children);
}
