import { _View } from "./view";
import { BuderWidget } from "./widget";

export class _Flex extends _View {
  constructor(children: BuderWidget[] | string = []) {
    super(children);
    this.style({ display: "flex" });
  }

  get center() {
    this._style.alignItems = "center";
    this._style.justifyContent = "center";
    return this;
  }
}

export function Flex(children: BuderWidget[] | string = []) {
  return new _Flex(children);
}
