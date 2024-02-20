import { BuderWidget } from "./widget";
export declare let _currentBuilder: _Builder | null;
declare class _Builder extends BuderWidget {
    _key: number;
    _func: (refresh: () => void) => BuderWidget;
    _element?: HTMLElement;
    _states: Map<number, any>;
    _statePointer: number;
    constructor(childFunc: (refresh: () => void) => BuderWidget);
    render(): HTMLElement;
    build(): void;
}
export declare function Builder(childFunc: (refresh: () => void) => BuderWidget): _Builder;
export declare function queryRefresh(selector: string): void;
export declare function bud(...classNames: string[]): void;
export {};
