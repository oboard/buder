import { _Flex } from "./flex";
import { BuderWidget } from "./widget";
export declare class _Column extends _Flex {
    constructor(children: BuderWidget[]);
}
export declare function Column(...children: BuderWidget[]): _Column;
