// import { _Builder, _currentBuilder } from "./widgets/builder";

import { _Builder, _currentBuilder } from "./widgets/widget";

export type StateValue<T> = T | BuderState<T>;

export class BuderState<T> {
  value: T;
  builder?: _Builder | null;
  callbacks: ((value: T) => void)[] = [];

  constructor(value: T, builder?: _Builder | null) {
    this.value = value;
    this.builder = builder;
  }

  // 重载“.”
  get(key: any) {
    const state = State((this.value as any)[key]);
    state.subscribe(() => {
      (this.value as any)[key] = state.value;
    });
    return state;
  }

  init(callback: (value: T) => void) {
    this.subscribe(callback);
    callback(this.value);
    return this;
  }

  subscribe(callback: (value: T) => void) {
    this.callbacks.push(callback);
    return this;
  }

  computed<U>(callback: (value: T) => U): BuderState<U> {
    const state = State(callback(this.value));
    this.subscribe(() => {
      state.set(callback(this.value));
    });
    return state;
  }

  set(newValue: T) {
    this.value = newValue;
    this.callbacks.forEach((callback) => {
      callback(newValue);
    });
  }
}

export function State<T>(obj: T): BuderState<T> {
  const currentBuilder = _currentBuilder;
  let index = 0;
  if (currentBuilder) {
    index = currentBuilder._statePointer;
    currentBuilder._statePointer++;
    if (currentBuilder._states.has(index)) {
      obj = currentBuilder._states.get(index);
    } else {
      currentBuilder._states.set(index, obj);
    }
  }
  return new Proxy(new BuderState(obj, currentBuilder), {
    set(target: BuderState<T>, key: any, value: any, receiver: any) {
      target.builder?._states.set(index, value);
      if (key == "value") {
        target.set(value);
      } else {
        Reflect.set(target, key, value, receiver);
      }
      target.builder?.build();
      // return Reflect.set(target, key, value, receiver);
      return true;
    },
  });
}
