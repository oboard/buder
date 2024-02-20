import { BuderUnit } from "../units";
import { _View } from "./view";
import { BuderWidget } from "./widget";

export class _Flex extends _View {
  _children: BuderWidget[];

  constructor(children: BuderWidget[] = []) {
    super();
    this._children = children;
    this.style({ display: "flex" });
  }

  gap(value: BuderUnit) {
    return this.style({ gap: value });
  }
}

export function Flex(children?: BuderWidget[]) {
  return new _Flex(children);
}
