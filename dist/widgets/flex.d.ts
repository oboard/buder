import { BuderUnit } from "../units";
import { _View } from "./view";
import { BuderWidget } from "./widget";
export declare class _Flex extends _View {
    constructor(children?: BuderWidget[] | string);
    gap(value: BuderUnit): BuderWidget;
}
export declare function Flex(children?: BuderWidget[] | string): _Flex;
