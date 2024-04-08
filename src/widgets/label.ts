import { _Text } from "./text";

export class _Label extends _Text {
  _tag = "label";
  constructor(text: string) {
    super(text);
  }

  for(id: string) {
    return this.attr({
      for: id,
    });
  }
}

export function Label(text: string) {
  return new _Label(text);
}
