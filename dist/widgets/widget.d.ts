import { BuderEvents } from "../events";
import { BuderState, StateValue } from "../state";
import { BuderStyle } from "../styles";
import { BuderUnit } from "../units";
import { BuderClassType } from "./theme";
import { ChildrenProps } from "./view";
type AttributesType = Record<string, StateValue<string>>;
export declare class BuderWidget {
    constructor();
    _instanceElement?: HTMLElement;
    _children?: ChildrenProps;
    _style: BuderStyle;
    _events: {
        [key: string]: ((e: any) => void)[];
    };
    _id?: string;
    _classes: BuderClassType[] | any;
    _tag?: string;
    _attr: AttributesType;
    _text?: StateValue<any>;
    _type?: string;
    mount(selector: string): this;
    render(el?: HTMLElement): HTMLElement;
    id(id: string): this;
    class(classes: BuderClassType): this;
    tag(tag: string): this;
    attr(s: AttributesType): this;
    style(s: BuderStyle): this;
    text(text: string): this;
    type(type: string): this;
    padding(value: BuderUnit | {
        top?: BuderUnit;
        left?: BuderUnit;
        right?: BuderUnit;
        bottom?: BuderUnit;
        vertical?: BuderUnit;
        horizontal?: BuderUnit;
    }): this;
    get full(): this;
    get expand(): this;
    event(events: BuderEvents): this;
}
export declare let _currentBuilder: _Builder | null;
export declare class _Builder extends BuderWidget {
    _func: (refresh: () => void) => BuderWidget;
    _states: Map<number, any>;
    _statePointer: number;
    constructor(childFunc: (refresh: () => void) => BuderWidget, states: BuderState<any>[] | undefined);
    bind(state: BuderState<any>): this;
    subscribe(callback: () => void): void;
    render(): HTMLElement;
    build(): void;
}
export declare function diffApply(target: HTMLElement, el: HTMLElement): HTMLElement | undefined;
export declare function Builder(childFunc: (refresh: () => void) => BuderWidget, states?: BuderState<any>[]): _Builder;
export {};
