import { BuderWidget } from "./widget";
export type ChildrenProps = BuderWidget[] | string[];
export declare class _View extends BuderWidget {
    constructor(children?: ChildrenProps);
    render(el?: HTMLElement): HTMLElement;
}
export declare function View(...children: BuderWidget[]): _View;
