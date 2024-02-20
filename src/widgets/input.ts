import { BuderWidget } from "./widget";
import { BuderState } from "../state";

class _Input extends BuderWidget {
  _model?: BuderState<string>;
  constructor(model?: BuderState<string>) {
    super();
    if (!model) return;

    this._model = model;

    this.attribute({ value: model.value });
    this.onInput((e) => {
      model.value = (e.target as HTMLInputElement).value;
    });
  }

  render() {
    const el = document.createElement("input");
    return super.render(el);
  }
}

export function Input(model?: BuderState<string>) {
  return new _Input(model);
}
