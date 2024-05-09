import { StateValue } from '../state';
import { BuderWidget } from './widget';

export declare class _Span extends BuderWidget {
    _type: string;
    constructor(text: StateValue<any>);
    render(): HTMLElement;
    get center(): this;
}
export declare function Span(text: StateValue<any>): _Span;
