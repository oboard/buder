import { BuderWidget } from "./widget";
import { BuderState } from "../state";

export class _Input extends BuderWidget {
  _type = "input";
  _tag = "input";

  _model?: BuderState<string>;
  constructor(model?: BuderState<string>) {
    super();
    if (!model) return;

    this._model = model;

    this.attr({ value: model.value });
    this.event({
      input: (e: any) => {
        model.value = (e.target as HTMLInputElement).value;
      },
    });
  }

  render() {
    const el = document.createElement(this._tag);
    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement ||
      el instanceof HTMLButtonElement
    ) {
      this._model?.subscribe((newValue) => {
        if (el) {
          el.value = newValue;
        }
      });
      el.value = this._model?.value ?? "";
    }
    return super.render(el);
  }
}

export function Input(model?: BuderState<string>) {
  return new _Input(model);
}
