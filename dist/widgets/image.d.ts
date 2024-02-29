import { BuderThemeType } from "./theme";
import { BuderWidget } from "./widget";
declare class _Image extends BuderWidget {
    _type: BuderThemeType;
    _src?: string;
    constructor(src: string);
    render(): HTMLElement;
}
export declare function Image(src: string): _Image;
export {};
