import { StateValue } from '../state';
import { BuderWidget } from './widget';

export type ChildrenProps = StateValue<BuderWidget | any>[] | string[];
export declare class _View extends BuderWidget {
    constructor(children?: ChildrenProps);
    render(el?: HTMLElement): HTMLElement;
}
export declare function View(...children: ChildrenProps): _View;
