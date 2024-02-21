import { BuderState } from "../state";
import { _View } from "./view";
import { BuderWidget } from "./widget";

export class _ForEach<T> extends _View {
  _state: BuderState<Iterable<T>>;
  _builder: (item: T, index: number) => BuderWidget;
  constructor(
    state: BuderState<Iterable<T>>,
    builder: (item: T, index: number) => BuderWidget
  ) {
    super();
    this._state = state;
    this._builder = builder;
  }

  render(): HTMLElement {
    let index = 0;
    this._children = [];
    for (const item of this._state.value) {
      const builder = this._builder(item, index++);
      this._children.push(builder);
    }
    return super.render();
  }
}

export function ForEach<T>(
  state: BuderState<Iterable<T>>,
  builder: (item: T, index: number) => BuderWidget
) {
  return new _ForEach(state, builder);
}
