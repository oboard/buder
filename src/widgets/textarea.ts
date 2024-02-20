import { BuderWidget } from "./widget";
import { BuderState } from "../state";

class _TextArea extends BuderWidget {
  _model?: BuderState<string>;
  constructor(model?: BuderState<string>) {
    super();
    this._model = model;
    if (model) {
      this.onInput((e) => {
        model.value = (e.target as HTMLTextAreaElement).value;
      });
    }
  }

  render() {
    const el = document.createElement("textarea");
    el.value = this._model?.value || "";
    this._model?.subscribe((newValue) => {
      el.value = newValue;
    });
    return super.render(el);
  }
}

export function TextArea(model?: BuderState<string>) {
  return new _TextArea(model);
}
