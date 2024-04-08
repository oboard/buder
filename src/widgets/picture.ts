import { StateValue } from "../state";
import { BuderWidget } from "./widget";

class _Picture extends BuderWidget {
  _type = "picture";
  _src?: string;
  constructor(src: StateValue<string>) {
    super();
    this.attr({ src });
  }

  render() {
    const el = document.createElement("img");
    return super.render(el);
  }
}

export function Picture(src: StateValue<string>) {
  return new _Picture(src);
}
