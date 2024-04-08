import { StateValue } from "../state";
import { BuderWidget } from "./widget";
declare class _Picture extends BuderWidget {
    _type: string;
    _src?: string;
    constructor(src: StateValue<string>);
    render(): HTMLElement;
}
export declare function Picture(src: StateValue<string>): _Picture;
export {};
