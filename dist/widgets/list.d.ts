import { BuderThemeType } from "./theme";
import { _View } from "./view";
import { BuderWidget } from "./widget";
declare class _List extends _View {
    _type: BuderThemeType;
    _order?: boolean;
    constructor(children?: BuderWidget[], order?: boolean);
    render(): HTMLElement;
}
export declare function List(children?: BuderWidget[], order?: boolean): _List;
declare class _ListItem extends _View {
    _type: BuderThemeType;
    constructor(children?: BuderWidget[]);
    render(): HTMLElement;
}
export declare function ListItem(children?: BuderWidget[]): _ListItem;
export {};
