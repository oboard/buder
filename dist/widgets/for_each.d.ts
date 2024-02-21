import { BuderState } from "../state";
import { _View } from "./view";
import { BuderWidget } from "./widget";
export declare class _ForEach<T> extends _View {
    _state: BuderState<Array<T>>;
    _builder: (item: T, index: number) => BuderWidget;
    _instanceElement?: HTMLElement;
    _parent?: BuderWidget;
    constructor(state: BuderState<Array<T>>, builder: (item: T, index: number) => BuderWidget, parent?: BuderWidget);
    build(): void;
    render(): HTMLElement;
}
export declare function ForEach<T>(state: BuderState<Array<T>>, builder: (item: T, index: number) => BuderWidget, parent?: BuderWidget): _ForEach<T>;
