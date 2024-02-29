import { BuderWidget } from "./widget";
import { BuderState } from "../state";
declare class _TextArea extends BuderWidget {
    _type: string;
    _model?: BuderState<string>;
    constructor(model?: BuderState<string>);
    render(): HTMLElement;
}
export declare function TextArea(model?: BuderState<string>): _TextArea;
export {};
