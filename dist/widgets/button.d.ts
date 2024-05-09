import { _View, ChildrenProps } from './view';

export declare class _Button extends _View {
    _type: string;
    constructor(children?: ChildrenProps);
    render(): HTMLElement;
}
export declare function Button(...children: ChildrenProps): _Button;
