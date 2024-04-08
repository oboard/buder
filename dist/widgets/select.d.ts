import { BuderState } from "../state";
import { _View } from "./view";
export declare class _Select extends _View {
    _type: string;
    _model?: BuderState<string>;
    _options?: Record<string, string>;
    constructor(options?: Record<string, string>);
    bind(model: BuderState<string>): this;
    render(): HTMLElement;
}
export declare function Select(options?: Record<string, string>): _Select;
