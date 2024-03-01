import { BuderEvents } from "../events";
import { BuderState } from "../state";
import { BuderStyle } from "../styles";
import { BuderUnit } from "../units";
import { BuderClassType } from "./theme";

type AttributesType = Record<string, string | BuderState<string>>;

export class BuderWidget {
  constructor() {}

  _children?: BuderWidget[];
  _style: BuderStyle = {};
  _events: { [key: string]: ((e: any) => void)[] } = {};
  _id?: string;
  _classes: BuderClassType[] | any = [];
  _tag?: string;
  _attribute: AttributesType = {};
  _text?: string | BuderState<any>;
  _type?: string;

  mount(selector: string): BuderWidget {
    const target = document.querySelector(selector);
    target?.replaceWith(this.render());
    return this;
  }

  render(el?: HTMLElement): HTMLElement {
    if (!el) {
      el = document.createElement(this._tag ?? "div");
    }
    for (const key in this._style) {
      const value = (this._style as any)[key];
      if (value instanceof Object) {
        if (value.value.subscribe) {
          value.value.subscribe((newValue: BuderUnit) => {
            if (el) {
              (el.style as any)[key] = `${newValue}${value.unit}`;
            }
          });
        } else if (value.subscribe) {
          value.subscribe((newValue: string) => {
            if (el) {
              (el.style as any)[key] = newValue;
            }
          });
        } else {
          (el.style as any)[key] = `${value.value}${value.unit}`;
        }
      } else {
        (el.style as any)[key] = value;
      }
    }

    // Add event listeners
    for (const key in this._events) {
      for (const event of this._events[key]) {
        el.addEventListener(key, event);
      }
    }

    // Add id and classes and attributes
    if (this._id) {
      el.id = this._id;
    }
    this._classes.forEach((classes: BuderClassType) => {
      if (typeof classes === "string") {
        if (classes && el) {
          el.classList.add(classes);
        }
      } else if (classes instanceof Array) {
        // @ts-ignore
        el.classList.add(...classes);
      } else if (classes instanceof BuderState) {
        classes.subscribe((newValue: string[]) => {
          if (el) {
            // 差量更新class
            el.classList.add(
              ...newValue.filter((c) => el && !el.classList.contains(c))
            );
            for (const c of el.classList) {
              if (!newValue.includes(c)) {
                el.classList.remove(c);
              }
            }
          }
        });
      }
    });

    for (const key in this._attribute) {
      if (typeof this._attribute[key] === "string") {
        // @ts-ignore
        el.setAttribute(key, this._attribute[key]);
      } else {
        // @ts-ignore
        el.setAttribute(key, this._attribute[key].value);
        // @ts-ignore
        this._attribute[key].subscribe((newValue: string) => {
          if (el) {
            el.setAttribute(key, newValue);
          }
        });
      }
    }
    if (this._text) {
      // @ts-ignore
      if (typeof this._text === "string") {
        el.textContent = this._text;
      } else {
        el.textContent = this._text.value;
        this._text.subscribe((newValue) => {
          if (el) {
            el.textContent = newValue;
          }
        });
      }
    }
    return el;
  }

  id(id: string): BuderWidget {
    this._id = id;
    return this;
  }

  class(classes: BuderClassType): BuderWidget {
    this._classes.push(classes);
    return this;
  }

  tag(tag: string): BuderWidget {
    this._tag = tag;
    return this;
  }

  attribute(s: AttributesType): BuderWidget {
    this._attribute = Object.assign(this._attribute, s);
    return this;
  }

  style(s: BuderStyle): BuderWidget {
    this._style = Object.assign(this._style, s);
    return this;
  }

  text(text: string): BuderWidget {
    this._text = text;
    return this;
  }

  type(type: string): BuderWidget {
    this._type = type;
    return this;
  }

  padding(
    value:
      | BuderUnit
      | {
          top?: BuderUnit;
          left?: BuderUnit;
          right?: BuderUnit;
          bottom?: BuderUnit;
          vertical?: BuderUnit;
          horizontal?: BuderUnit;
        }
  ): BuderWidget {
    // @ts-ignore
    if (value.unit) {
      // @ts-ignore
      return this.style({ padding: value });
    } else {
      // @ts-ignore
      const { top, left, right, bottom, vertical, horizontal } = value;
      if (vertical || horizontal) {
        return this.style({
          paddingTop: vertical,
          paddingBottom: vertical,
          paddingLeft: horizontal,
          paddingRight: horizontal,
        });
      } else {
        return this.style({
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        });
      }
    }
  }

  get full(): BuderWidget {
    return this.style({
      width: "100%",
      height: "100%",
    });
  }

  get expand(): BuderWidget {
    return this.style({ flex: "1" });
  }

  event(events: BuderEvents): BuderWidget {
    // this._events = Object.assign(this._events, events);
    for (const key in events) {
      if (!this._events[key]) {
        this._events[key] = [];
      }
      // @ts-ignore
      this._events[key].push(events[key]);
    }
    return this;
  }
}

// import { BuderState } from "../state";
// import { _View } from "./view";
// import { BuderWidget } from "./widget";

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
      this._instanceElement = el;
    } else {
      diffApply(this._instanceElement, el);
    }
    this._statePointer = 0;
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
