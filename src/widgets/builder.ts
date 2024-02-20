import { _View } from "./view";
import { BuderWidget } from "./widget";

let _globalBuilder: BuderWidget[] = [];

export let _currentBuilder: _Builder | null = null;

class _Builder extends BuderWidget {
  _key: number;
  _func: (refresh: () => void) => BuderWidget;
  _element?: HTMLElement;
  _states: Map<number, any> = new Map();
  _statePointer = 0;

  constructor(childFunc: (refresh: () => void) => BuderWidget) {
    super();
    this._func = childFunc;
    this._key = _globalBuilder.length;
    _globalBuilder.push(this);

    _currentBuilder = this;
  }

  render() {
    const el = this._func(this.build.bind(this)).render();
    el.setAttribute("bud", this._key.toString());
    this._element = el;
    this._statePointer = 0;
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

export function bud(...classNames: string[]) {
  return queryRefresh("." + classNames.join(",."));
}
