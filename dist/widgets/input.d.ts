import { BuderWidget } from "./widget";
import { BuderState } from "../state";
declare class _Input extends BuderWidget {
    _model?: BuderState<string>;
    constructor(model?: BuderState<string>);
    render(): HTMLElement;
}
export declare function Input(model?: BuderState<string>): _Input;
export {};
