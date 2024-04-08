import { BuderState } from "../state";
import { _View } from "./view";
import { BuderWidget, diffApply } from "./widget";

type BuilderType<T> = (item: T, index: number, array: Array<T>) => BuderWidget;
export class _ForEach<T> extends _View {
  _state: BuderState<Array<T>>;
  _builder: BuilderType<T>;
  _parent?: BuderWidget;
  constructor(
    state: BuderState<Array<T>>,
    builder: BuilderType<T>,
    parent?: BuderWidget
  ) {
    super();
    this._state = state;
    this._builder = builder;
    this._parent = parent;

    this._state.subscribe(() => {
      this.build();
    });
  }

  build() {
    if (this._instanceElement) {
      diffApply(this._instanceElement, this.render());
    }
  }

  render(): HTMLElement {
    let index = 0;
    this._children = [] as BuderWidget[];
    for (const item of this._state.value) {
      const child = this._builder(item, index++, this._state.value);
      this._children.push(child);
    }
    const el = super.render(this._parent?.render());
    if (!this._instanceElement) {
      return (this._instanceElement = el);
    } else {
      return el;
    }
  }
}

export function ForEach<T>(
  state: BuderState<Array<T>>,
  builder: BuilderType<T>,
  parent?: BuderWidget
) {
  return new _ForEach(state, builder, parent);
}
