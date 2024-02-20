import { BuderWidget } from "./widget";
export declare class _View extends BuderWidget {
    _children: BuderWidget[];
    constructor(children?: BuderWidget[]);
    render(el?: HTMLElement): HTMLElement;
}
export declare function View(children?: BuderWidget[]): _View;
