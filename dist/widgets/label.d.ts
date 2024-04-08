import { _Text } from "./text";
export declare class _Label extends _Text {
    _tag: string;
    constructor(text: string);
    for(id: string): this;
}
export declare function Label(text: string): _Label;
