import { BuderWidget } from "./widget";
declare class _Image extends BuderWidget {
    _type: string;
    _src?: string;
    constructor(src: string);
    render(): HTMLElement;
}
export declare function Image(src: string): _Image;
export {};
