import { BuderUnit } from "../units";
import { _View } from "./view";
import { BuderWidget } from "./widget";

export class _Flex extends _View {
  constructor(children: BuderWidget[] | string = []) {
    super(children);
    this.style({ display: "flex" });
  }

  gap(value: BuderUnit) {
    return this.style({ gap: value });
  }
}

export function Flex(children: BuderWidget[] | string = []) {
  return new _Flex(children);
}
