import { BuderState } from "../state";
import { _View } from "./view";
import { BuderWidget } from "./widget";
export declare class _ForEach<T> extends _View {
    _state: BuderState<Iterable<T>>;
    _builder: (item: T, index: number) => BuderWidget;
    constructor(state: BuderState<Iterable<T>>, builder: (item: T, index: number) => BuderWidget);
    render(): HTMLElement;
}
export declare function ForEach<T>(state: BuderState<Iterable<T>>, builder: (item: T, index: number) => BuderWidget): _ForEach<T>;
