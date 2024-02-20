import { _Builder } from "./widgets/builder";
export interface BuderState<T> {
    value: T;
    builder?: _Builder | null;
}
export declare function State<T>(obj: T): BuderState<T>;
