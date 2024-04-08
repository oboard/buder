import { BuderWidget } from "./widget";
import { BuderState, StateValue } from "../state";

export class _Input extends BuderWidget {
  _type = "input";
  _tag = "input";

  _model?: StateValue<string>;
  constructor(model?: StateValue<string>) {
    super();
    if (!model) return;

    this._model = model;
    if (model instanceof BuderState) {
      this.attr({ value: model.value });
      this.event({
        input: (e: any) => {
          model.value = (e.target as HTMLInputElement).value;
        },
      });
    } else {
      this.attr({ value: model });
    }
  }

  render() {
    const el = document.createElement(this._tag);
    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement ||
      el instanceof HTMLButtonElement
    ) {
      if (this._model instanceof BuderState) {
        this._model?.init((newValue) => {
          if (el) {
            el.value = newValue;
          }
        });
      }
    }
    return super.render(el);
  }
}

export function Input(model?: StateValue<string>) {
  return new _Input(model);
}
