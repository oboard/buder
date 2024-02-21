import { _View } from "./view";
import { BuderWidget } from "./widget";
export declare class _Flex extends _View {
    constructor(children?: BuderWidget[] | string);
    get center(): this;
}
export declare function Flex(children?: BuderWidget[] | string): _Flex;
