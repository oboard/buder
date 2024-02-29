import { BuderState } from "../state";
import { BuderThemeType } from "./theme";
import { BuderWidget } from "./widget";
declare class _Text extends BuderWidget {
    _type: BuderThemeType;
    constructor(text: string | BuderState<any>);
    render(): HTMLElement;
    get center(): this;
}
export declare function Text(text: string | BuderState<any>): _Text;
export {};
