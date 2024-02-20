import { _Flex } from "./flex";
import { BuderWidget } from "./widget";

class _Col extends _Flex {
  constructor(children: BuderWidget[] = []) {
    super(children);
    this.style({ flexDirection: "column" });
  }
}

export function Col(children?: BuderWidget[]) {
  return new _Col(children);
}
