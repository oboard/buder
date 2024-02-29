import { BuderWidget } from "./widget";
import { BuderState } from "../state";
import { BuderThemeType } from "./theme";

class _TextArea extends BuderWidget {
  _type = BuderThemeType.textarea;

  _model?: BuderState<string>;
  constructor(model?: BuderState<string>) {
    super();
    this._model = model;
    if (model) {
      this.event({
        input: (e: any) => {
          model.value = (e.target as HTMLInputElement).value;
        },
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
