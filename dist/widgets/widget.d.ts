import { BuderEvents } from "../events";
import { BuderState } from "../state";
import { BuderStyle } from "../styles";
import { BuderUnit } from "../units";
import { BuderClassType, BuderThemeType } from "./theme";
type AttributesType = Record<string, string | BuderState<string>>;
export declare class BuderWidget {
    constructor();
    _children?: BuderWidget[];
    _style: BuderStyle;
    _events: {
        [key: string]: (e: any) => void;
    };
    _id?: string;
    _classes: BuderClassType[] | any;
    _tag?: string;
    _attribute: AttributesType;
    _text?: string | BuderState<any>;
    _type?: BuderThemeType;
    mount(selector: string): BuderWidget;
    render(el?: HTMLElement): HTMLElement;
    id(id: string): BuderWidget;
    class(classes: BuderClassType): BuderWidget;
    tag(tag: string): BuderWidget;
    attribute(s: AttributesType): BuderWidget;
    style(s: BuderStyle): BuderWidget;
    text(text: string): BuderWidget;
    type(type: BuderThemeType): BuderWidget;
    padding(value: BuderUnit | {
        top?: BuderUnit;
        left?: BuderUnit;
        right?: BuderUnit;
        bottom?: BuderUnit;
        vertical?: BuderUnit;
        horizontal?: BuderUnit;
    }): BuderWidget;
    get full(): BuderWidget;
    get expand(): BuderWidget;
    event(events: BuderEvents): BuderWidget;
}
export {};
