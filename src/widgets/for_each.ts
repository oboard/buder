import { BuderState } from "../state";
import { diffApply } from "./builder";
import { _View } from "./view";
import { BuderWidget } from "./widget";

export class _ForEach<T> extends _View {
  _state: BuderState<Array<T>>;
  _builder: (item: T, index: number) => BuderWidget;
  _instanceElement?: HTMLElement;
  _parent?: BuderWidget;
  constructor(
    state: BuderState<Array<T>>,
    builder: (item: T, index: number) => BuderWidget,
    parent?: BuderWidget
  ) {
    super();
    this._state = state;
    this._builder = builder;
    this._parent = parent;

    this._state.subscribe(() => {
      console.log("subscribed");
      this.build();
    });
  }

  build() {
    if (this._instanceElement) {
      console.log(this._instanceElement, this.render());
      diffApply(this._instanceElement, this.render());
    }
  }

  render(): HTMLElement {
    let index = 0;
    this._children = [];
    for (const item of this._state.value) {
      const child = this._builder(item, index++);
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
  builder: (item: T, index: number) => BuderWidget,
  parent?: BuderWidget
) {
  return new _ForEach(state, builder, parent);
}
