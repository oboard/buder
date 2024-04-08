import { _Flex } from "./flex";
import { ChildrenProps } from "./view";

export class _Column extends _Flex {
  constructor(children: ChildrenProps) {
    super(children);
    this.style({ flexDirection: "column" });
  }
}

export function Column(...children: ChildrenProps) {
  return new _Column(children);
}
