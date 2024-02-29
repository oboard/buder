import { BuderThemeType } from "./theme";
import { _View } from "./view";
import { BuderWidget } from "./widget";

class _Link extends _View {
  _type = BuderThemeType.link

  constructor(href: string, children?: BuderWidget[]) {
    super(children);
    this.attribute({ href });
  }

  render() {
    const el = document.createElement("a");
    return super.render(el);
  }
}

export function Link(href: string, children?: BuderWidget[]) {
  return new _Link(href, children);
}
