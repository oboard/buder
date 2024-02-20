import { BuderWidget } from "./widget";

class _Img extends BuderWidget {
  _src?: string;
  constructor(src: string) {
    super();
    this.attribute({ src });
  }

  render() {
    const el = document.createElement("img");
    return super.render(el);
  }
}

export function Img(src: string) {
  return new _Img(src);
}
