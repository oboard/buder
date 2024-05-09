import { BuderState } from '../state';
import { _Input } from './input';

declare class _TextArea extends _Input {
    _type: string;
    _tag: string;
    constructor(model?: BuderState<string>);
    render(): HTMLElement;
}
export declare function TextArea(model?: BuderState<string>): _TextArea;
export {};
