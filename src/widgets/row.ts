import { _Flex } from "./flex";
import { BuderWidget } from "./widget";

export class _Row extends _Flex {
  constructor(children:  BuderWidget[]) {
    super(children);
    this.style({ flexDirection: "row" });
  }
}

export function Row(...children: BuderWidget[]) {
  return new _Row(children);
}
