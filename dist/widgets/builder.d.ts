import { BuderState } from "../state";
import { BuderWidget } from "./widget";
export declare let _currentBuilder: _Builder | null;
export declare class _Builder extends BuderWidget {
    _func: (refresh: () => void) => BuderWidget;
    _element?: HTMLElement;
    _states: Map<number, any>;
    _statePointer: number;
    constructor(childFunc: (refresh: () => void) => BuderWidget, states: BuderState<any>[] | undefined);
    subscribe(callback: () => void): void;
    render(): HTMLElement;
    build(): void;
}
export declare function diffApply(target: HTMLElement, el: HTMLElement): HTMLElement | undefined;
export declare function Builder(childFunc: (refresh: () => void) => BuderWidget, states?: BuderState<any>[]): _Builder;
