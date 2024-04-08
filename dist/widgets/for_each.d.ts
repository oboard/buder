import { BuderState } from "../state";
import { _View } from "./view";
import { BuderWidget } from "./widget";
type BuilderType<T> = (item: T, index: number, array: Array<T>) => BuderWidget;
export declare class _ForEach<T> extends _View {
    _state: BuderState<Array<T>>;
    _builder: BuilderType<T>;
    _parent?: BuderWidget;
    constructor(state: BuderState<Array<T>>, builder: BuilderType<T>, parent?: BuderWidget);
    build(): void;
    render(): HTMLElement;
}
export declare function ForEach<T>(state: BuderState<Array<T>>, builder: BuilderType<T>, parent?: BuderWidget): _ForEach<T>;
export {};
