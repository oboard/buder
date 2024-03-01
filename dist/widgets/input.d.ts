import { BuderWidget } from "./widget";
import { BuderState } from "../state";
export declare class _Input extends BuderWidget {
    _type: string;
    _tag: string;
    _model?: BuderState<string>;
    constructor(model?: BuderState<string>);
    render(): HTMLElement;
}
export declare function Input(model?: BuderState<string>): _Input;
