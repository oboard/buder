import { _Builder } from "./widgets/widget";
export type StateValue<T> = T | BuderState<T>;
export declare class BuderState<T> {
    value: T;
    builder?: _Builder | null;
    callbacks: ((value: T) => void)[];
    constructor(value: T, builder?: _Builder | null);
    get(key: any): BuderState<any>;
    transform<U>(forward: (value: T) => U, backward: (value: U) => T): BuderState<U>;
    init(callback: (value: T) => void): this;
    subscribe(callback: (value: T) => void): this;
    computed<U>(callback: (value: T) => U): BuderState<U>;
    set(newValue: T): void;
    _set(newValue: T): void;
}
export declare function State<T>(obj: T): BuderState<T>;
