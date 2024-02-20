import { BuderUnit } from "../units";
import { BuderWidget } from "./widget";

class _H extends BuderWidget {
  constructor(height: BuderUnit) {
    super();
    this.style({ height });
  }
}

export function H(height: BuderUnit) {
  return new _H(height);
}

class _W extends BuderWidget {
  constructor(width: BuderUnit) {
    super();
    this.style({ width });
  }
}

export function W(width: BuderUnit) {
  return new _W(width);
}
