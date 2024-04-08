import { _View, ChildrenProps } from "./view";

export class _Flex extends _View {
  constructor(children: ChildrenProps) {
    super(children);
    this.style({ display: "flex" });
  }

  get center() {
    this._style.alignItems = "center";
    this._style.justifyContent = "center";
    return this;
  }
}

export function Flex(...children: ChildrenProps) {
  return new _Flex(children);
}
