import { BuderThemeType } from "./theme";
import { _View } from "./view";
import { BuderWidget } from "./widget";
declare class _Link extends _View {
    _type: BuderThemeType;
    constructor(href: string, children?: BuderWidget[]);
    render(): HTMLElement;
}
export declare function Link(href: string, children?: BuderWidget[]): _Link;
export {};
