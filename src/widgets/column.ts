import { _Flex } from "./flex";
import { BuderWidget } from "./widget";

export class _Column extends _Flex {
  constructor(children: BuderWidget[]) {
    super(children);
    this.style({ flexDirection: "column" });
  }
}

export function Column(...children: BuderWidget[]) {
  return new _Column(children);
}
