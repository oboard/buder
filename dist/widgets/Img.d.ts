import { BuderWidget } from "./widget";
declare class _Img extends BuderWidget {
    _src?: string;
    constructor(src: string);
    render(): HTMLElement;
}
export declare function Img(src: string): _Img;
export {};
