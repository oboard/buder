import { _Span } from './span';

export declare class _Label extends _Span {
    _tag: string;
    constructor(text: string);
    for(id: string): this;
}
export declare function Label(text: string): _Label;
