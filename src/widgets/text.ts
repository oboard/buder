import { BuderWidget } from "./widget";

class _Text extends BuderWidget {

  constructor(text: string) {
    super();
    this._text = text;
  }

  render() {
    const el = document.createElement("span");
    return super.render(el);
  }
}

export function Text(text: string) {
  return new _Text(text);
}
