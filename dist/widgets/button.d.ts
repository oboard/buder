import { _View } from "./view";
import { BuderWidget } from "./widget";
declare class _Button extends _View {
    _type: string;
    constructor(children?: BuderWidget[] | string);
    render(): HTMLElement;
}
export declare function Button(children?: BuderWidget[] | string): _Button;
export {};
