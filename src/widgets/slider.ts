import { BuderState } from "../state";
import { BuderWidget } from "./widget";

export interface SliderOptions {
  min: number;
  max: number;
  step: number;
}

export class _Slider extends BuderWidget {
  _options?: SliderOptions;
  _type = "slider";
  _tag = "input";

  _model?: BuderState<number>;
  constructor(model?: BuderState<number>, options?: SliderOptions) {
    super();
    if (!model) return;

    this._model = model;
    this._options = options;

    this.attr({ value: model.value.toString() });
    this.event({
      input: (e: any) => {
        model.value = Number((e.target as HTMLInputElement).value);
      },
    });
  }

  render() {
    const el = document.createElement(this._tag) as HTMLInputElement;
    el.type = "range";
    el.min = this._options?.min.toString() || "0";
    el.max = this._options?.max.toString() || "100";
    el.step = this._options?.step.toString() || "1";

    this._model?.subscribe((newValue) => {
      if (el) {
        el.value = newValue.toString();
      }
    });
    el.value = (this._model?.value ?? "").toString();

    return super.render(el);
  }
}

export const Slider = (value: BuderState<number>, options: SliderOptions) =>
  new _Slider(value, options);
