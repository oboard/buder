import { BuderState } from "../state";
import { BuderWidget } from "./widget";

export class _Text extends BuderWidget {
  _type = "text";

  constructor(text: string | BuderState<any>) {
    super();
    this._text = text;
  }

  render() {
    const el = document.createElement(this._tag ?? "span");
    return super.render(el);
  }

  get center() {
    this._style.verticalAlign = "middle";
    this._style.textAlign = "center";
    return this;
  }
}

export function Text(text: string | BuderState<any>) {
  return new _Text(text);
}
