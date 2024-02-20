import { BuderState } from "../state";
import { BuderWidget } from "./widget";
export declare let _currentBuilder: _Builder | null;
export declare class _Builder extends BuderWidget {
    _key: number;
    _func: (refresh: () => void) => BuderWidget;
    _element?: HTMLElement;
    _states: Map<number, any>;
    _statePointer: number;
    constructor(childFunc: (refresh: () => void) => BuderWidget, states: BuderState<any>[] | undefined);
    render(): HTMLElement;
    build(): void;
}
export declare function Builder(childFunc: (refresh: () => void) => BuderWidget, states?: BuderState<any>[]): _Builder;
export declare function queryRefresh(selector: string): void;
export declare function bud(...classNames: string[]): void;
