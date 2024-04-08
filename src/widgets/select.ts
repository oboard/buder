import { BuderState } from "../state";
import { _View } from "./view";

export class _Select extends _View {
  _type = "select";
  _model?: BuderState<string>;
  _options?: Record<string, string>;
  constructor(options?: Record<string, string>) {
    super();
    this._options = options;
  }

  bind(model: BuderState<string>) {
    this._model = model;
    this.event({
      change: (e) => {
        model.set((e.target as HTMLSelectElement).value ?? "");
      },
    });
    return this;
  }

  render() {
    const el = document.createElement("select");
    if (this._options) {
      Object.entries(this._options).forEach(([key, value]) => {
        const option = document.createElement("option");
        option.value = key;
        option.text = value;
        el.appendChild(option);
      });
    }
    this._model?.subscribe((value) => {
      el.value = value;
    });
    return super.render(el);
  }
}

export function Select(options?: Record<string, string>) {
  return new _Select(options);
}
