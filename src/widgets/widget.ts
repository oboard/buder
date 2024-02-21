import { BuderEvents } from "../events";
import { BuderState } from "../state";
import { BuderStyle } from "../styles";
import { BuderUnit } from "../units";

type AttributesType = Record<string, string | BuderState<string>>;

export class BuderWidget {
  constructor() {}

  _style: BuderStyle = {};
  _events: { [key: string]: (e: any) => void } = {};
  _id?: string;
  _classes: string[] = [];
  _tag?: string;
  _attribute: AttributesType = {};
  _text?: string | BuderState<any>;

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
      el.addEventListener(key, this._events[key]);
    }

    // Add id and classes and attributes
    if (this._id) {
      el.id = this._id;
    }
    if (this._classes.length > 0) {
      el.classList.add(...this._classes);
    }
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

  class(...classes: string[]): BuderWidget {
    if (classes.length === 1) {
      this._classes = classes[0].split(" ");
    } else {
      this._classes = classes;
    }
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
    this._events = Object.assign(this._events, events);
    return this;
  }
}
