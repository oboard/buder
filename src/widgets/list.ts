import { _View } from "./view";
import { BuderWidget } from "./widget";

class _List extends _View {
  _type = "list";
  // _order?: boolean;
  constructor(children: BuderWidget[]) {
    super(children);
    // this._order = order;
  }

  render() {
    // const el = document.createElement(this._order ?? false ? "ol" : "ul");
    const el = document.createElement("ul");
    return super.render(el);
  }
}

export function List(...children: BuderWidget[]) {
  return new _List(children);
}

class _ListItem extends _View {
  _type = "list-item";
  constructor(children: BuderWidget[]) {
    super(children);
  }

  render() {
    const el = document.createElement("li");
    return super.render(el);
  }
}

export function ListItem(...children: BuderWidget[]) {
  return new _ListItem(children);
}
