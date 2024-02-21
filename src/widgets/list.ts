import { _View } from "./view";
import { BuderWidget } from "./widget";

class _List extends _View {
  _order?: boolean;
  constructor(children?: BuderWidget[], order?: boolean) {
    super(children);
    this._order = order;
  }

  render() {
    const el = document.createElement(this._order ?? false ? "ol" : "ul");
    return super.render(el);
  }
}

export function List(children?: BuderWidget[], order?: boolean) {
  return new _List(children, order);
}


class _ListItem extends _View {
  constructor(children?: BuderWidget[]) {
    super(children);
  }

  render() {
    const el = document.createElement("li");
    return super.render(el);
  }
}

export function ListItem(children?: BuderWidget[]) {
  return new _ListItem(children);
}