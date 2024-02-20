import { _currentBuilder } from "./widgets/builder";

export function State<T>(
  obj: T,
  { deep }: { deep?: boolean } = {
    deep: false,
  }
): { value: T } {
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
  if (deep) {
    if (typeof obj === "object") {
      for (const key in obj) {
        // @ts-ignore
        obj[key] = State(obj[key], { deep });
      }
    }
  }
  return new Proxy(
    { value: obj },
    {
      // get(target: any, key: any, receiver: any) {
      //   return Reflect.get(target, key, receiver);
      // },
      set(target: any, key: any, value: any, receiver: any) {
        currentBuilder?._states.set(index, value);
        currentBuilder?.build();
        return Reflect.set(target, key, value, receiver);
      },
    }
  );
}
