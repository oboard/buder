import { BuderState } from "../state";
import { _Input } from "./input";

class _TextArea extends _Input {
  _type = "textarea";
  _tag = "textarea";

  constructor(model?: BuderState<string>) {
    super(model);
  }

  render() {
    return super.render();
  }
}

export function TextArea(model?: BuderState<string>) {
  return new _TextArea(model);
}
