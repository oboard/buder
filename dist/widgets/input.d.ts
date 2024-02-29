import { BuderWidget } from "./widget";
import { BuderState } from "../state";
import { BuderThemeType } from "./theme";
declare class _Input extends BuderWidget {
    _type: BuderThemeType;
    _model?: BuderState<string>;
    constructor(model?: BuderState<string>);
    render(): HTMLElement;
}
export declare function Input(model?: BuderState<string>): _Input;
export {};
