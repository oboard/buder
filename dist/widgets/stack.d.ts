import { _View } from "./view";
import { BuderWidget } from "./widget";
declare class _Stack extends _View {
    _children: BuderWidget[];
    constructor(children?: BuderWidget[]);
}
export declare function Stack(children?: BuderWidget[]): _Stack;
export {};
