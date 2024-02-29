import { BuderThemeType } from "./theme";
import { BuderWidget } from "./widget";

class _Image extends BuderWidget {
  _type = BuderThemeType.image;
  
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

export function Image(src: string) {
  return new _Image(src);
}
