import { _Builder } from "./widgets/builder";
export declare class BuderState<T> {
    value: T;
    builder?: _Builder | null;
    callbacks: ((value: T) => void)[];
    constructor(value: T, builder?: _Builder | null);
    get(key: any): BuderState<any>;
    subscribe(callback: (value: T) => void): void;
    set(newValue: T): void;
}
export declare function State<T>(obj: T): BuderState<T>;
