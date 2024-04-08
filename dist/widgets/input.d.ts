import { BuderWidget } from "./widget";
import { StateValue } from "../state";
export declare class _Input extends BuderWidget {
    _type: string;
    _tag: string;
    _model?: StateValue<string>;
    constructor(model?: StateValue<string>);
    render(): HTMLElement;
}
export declare function Input(model?: StateValue<string>): _Input;
