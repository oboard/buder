import { _View } from "./view";
import { BuderWidget } from "./widget";

let _globalBuilder: BuderWidget[] = [];

class _Builder extends _View {
  children: BuderWidget[] = [];
  _key: number;
  _func: (refresh: () => void) => BuderWidget;
  _element?: HTMLElement;

  constructor(childFunc: (refresh: () => void) => BuderWidget) {
    super();
    this._func = childFunc;
    this._key = _globalBuilder.length;
    _globalBuilder.push(this);
  }

  render() {
    this.children = [this._func(this.build.bind(this))];

    const el = document.createElement("div");
    el.setAttribute("bud", this._key.toString());
    this._element = el;
    return super.render(el);
  }
  build() {
    this._element?.replaceWith(this.render());
  }
}

export function Builder(childFunc: (refresh: () => void) => BuderWidget) {
  return new _Builder(childFunc);
}

export function queryRefresh(selector: string) {
  const targets = document.querySelectorAll(selector);
  for (const target of targets) {
    const key = target.getAttribute("bud");
    if (!key) continue;
    const builder = _globalBuilder[Number(key)];
    if (builder) {
      target.replaceWith(builder.render());
    }
  }
}
