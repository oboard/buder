import { BuderWidget } from "./base/widget";

class _Text extends BuderWidget {
  text: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  render() {
    const el = document.createElement("span");
    el.innerText = this.text;
    return super.render(el);
  }
}

export function Text(text: string) {
  return new _Text(text);
}
