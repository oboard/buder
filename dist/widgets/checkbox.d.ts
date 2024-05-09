import { BuderState } from '../state';
import { BuderWidget } from './widget';

export declare class _Checkbox extends BuderWidget {
    _tag: string;
    _model?: BuderState<boolean>;
    _type: string;
    constructor(model?: BuderState<boolean>);
    render(): HTMLInputElement;
}
export declare function Checkbox(model?: BuderState<boolean>): _Checkbox;
