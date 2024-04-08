import { _View, ChildrenProps } from "./view";
export declare class _Flex extends _View {
    constructor(children: ChildrenProps);
    get center(): this;
}
export declare function Flex(...children: ChildrenProps): _Flex;
