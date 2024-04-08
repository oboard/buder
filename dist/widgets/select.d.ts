import { BuderState, StateValue } from "../state";
import { _View } from "./view";
export declare class _Select extends _View {
    _type: string;
    _model?: BuderState<string>;
    _options?: Record<string, string>;
    constructor(options: StateValue<Record<string, string>>);
    bind(model: BuderState<string>): this;
    render(): HTMLElement;
}
export declare function Select(options: StateValue<Record<string, string>>): _Select;
