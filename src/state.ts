import { _Builder, _currentBuilder } from "./widgets/builder";

export interface BuderState<T> {
  value: T;
  builder?: _Builder | null;
}

export function State<T>(obj: T): BuderState<T> {
  const currentBuilder =  _currentBuilder;
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
  return new Proxy(
    { value: obj, builder: currentBuilder },
    {
      set(target: BuderState<T>, key: any, value: any, _: any) {

        target.builder?._states.set(index, value);
        // @ts-ignore
        target[key] = value;
        target.builder?.build();
        // return Reflect.set(target, key, value, receiver);
        return true;
      },
    }
  );
}
