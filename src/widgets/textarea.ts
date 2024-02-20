import { BuderWidget } from "./widget";
import { BuderState } from "../state";

class _TextArea extends BuderWidget {
  _model?: BuderState<string>;
  constructor(model?: BuderState<string>) {
    super();
    this._model = model;
  }

  render() {
    const el = document.createElement("textarea");
    el.value = this._model?.value ?? "";
    el.addEventListener("input", (e) => {
      this._model!.value = (e.target as HTMLTextAreaElement).value;
    });
    return super.render(el);
  }
}

export function TextArea(model?: BuderState<string>) {
  return new _TextArea(model);
}
