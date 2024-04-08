import { _View } from "./view";
import { BuderWidget } from "./widget";
export declare class _Flex extends _View {
    constructor(children: BuderWidget[]);
    get center(): this;
}
export declare function Flex(...children: BuderWidget[]): _Flex;
