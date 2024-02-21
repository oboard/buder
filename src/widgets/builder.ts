import { BuderState } from "../state";
import { _View } from "./view";
import { BuderWidget } from "./widget";

// let _globalBuilder: BuderWidget[] = [];

export let _currentBuilder: _Builder | null = null;

export class _Builder extends BuderWidget {
  // _key: number;
  _func: (refresh: () => void) => BuderWidget;
  _instanceElement?: HTMLElement;
  _states: Map<number, any> = new Map();
  _statePointer = 0;

  constructor(
    childFunc: (refresh: () => void) => BuderWidget,
    states: BuderState<any>[] | undefined
  ) {
    super();
    _currentBuilder = this;
    this._func = childFunc;
    if (states) {
      states.forEach((state) => {
        state.subscribe(() => {
          this.build();
        });
      });
    }
  }

  subscribe(callback: () => void) {
    this._states.forEach((_, index) => {
      const state = this._states.get(index);
      if (state instanceof BuderState) {
        state.builder = this;
        state.subscribe(callback);
      }
    });
  }

  render(): HTMLElement {
    const el = super.render(this._func(this.build.bind(this)).render());
    if (!this._instanceElement) {
      // el.setAttribute("bud", this._key.toString());
      this._instanceElement = el;
    } else {
      diffApply(this._instanceElement, el);
    }
    this._statePointer = 0;
    // console.log(this._element, el);
    return el;
  }
  build() {
    this.render();
  }
}

export function diffApply(target: HTMLElement, el: HTMLElement) {
  if (!target || !el) return;
  if (target.isEqualNode(el)) return;
  if (target.tagName !== el.tagName) {
    target.replaceWith(el);
  }
  const targetAttrs = target.attributes;
  const elAttrs = el.attributes;

  // 比较content
  if (targetAttrs && elAttrs) {
    // 比较属性
    for (let i = 0; i < targetAttrs.length; i++) {
      const attr = targetAttrs[i];
      const elAttr = elAttrs.getNamedItem(attr.name);
      if (!elAttr) {
        target.removeAttribute(attr.name);
      } else if (elAttr.value !== attr.value) {
        target.setAttribute(attr.name, elAttr.value);
      }
    }
    for (let i = 0; i < elAttrs.length; i++) {
      const attr = elAttrs[i];
      if (!targetAttrs.getNamedItem(attr.name)) {
        target.setAttribute(attr.name, attr.value);
      }
    }
  }
  // 比较子节点
  const targetChildren = target.childNodes;
  const elChildren = el.childNodes;

  const length = Math.max(targetChildren.length, elChildren.length);
  // console.log(target, el, length, targetChildren, elChildren);
  if (length == 0) {
    if (target.textContent !== el.textContent) {
      target.textContent = el.textContent;
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (i >= targetChildren.length) {
        target.appendChild(elChildren[i]);
        continue;
      }
      if (i >= elChildren.length) {
        target.removeChild(targetChildren[i]);
        continue;
      }
      diffApply(targetChildren[i] as HTMLElement, elChildren[i] as HTMLElement);
    }
  }

  return target;
}

export function Builder(
  childFunc: (refresh: () => void) => BuderWidget,
  states?: BuderState<any>[]
) {
  return new _Builder(childFunc, states);
}

// export function queryRefresh(selector: string) {
//   const targets = document.querySelectorAll(selector);
//   for (const target of targets) {
//     const key = target.getAttribute("bud");
//     if (!key) continue;
//     const builder = _globalBuilder[Number(key)];
//     if (builder) {
//       // target.replaceWith(builder.render());
//       diffApply(target as HTMLElement, builder.render());
//     }
//   }
// }

// export function bud(...classNames: string[]) {
//   return queryRefresh("." + classNames.join(",."));
// }
