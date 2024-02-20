import { BuderUnit } from "../units";
import { _View } from "./view";
import { BuderWidget } from "./widget";
export declare class _Flex extends _View {
    _children: BuderWidget[];
    constructor(children?: BuderWidget[]);
    gap(value: BuderUnit): BuderWidget;
}
export declare function Flex(children?: BuderWidget[]): _Flex;
