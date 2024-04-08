import { BuderState } from "../state";
import { _Input } from "./input";
import { BuderWidget } from "./widget";

export class _Checkbox extends BuderWidget {
  _tag = "input";
  _model?: BuderState<boolean>;
  _type = "checkbox";
  constructor(model?: BuderState<boolean>) {
    super();
    if (!model) return;

    this._model = model;

    this.attr({
      type: "checkbox",
      checked: model.value ? "true" : "false",
    });
    this.event({
      input: (e: any) => {
        model.value = (e.target as HTMLInputElement).checked ? true : false;
      },
    });
  }

  render() {
    const el = super.render() as HTMLInputElement;
    this._model?.init((newValue) => {
      if (el) {
        el.checked = newValue;
      }
    });

    return el;
  }
}

export function Checkbox(model?: BuderState<boolean>) {
  return new _Checkbox(model);
}
