import { BuderWidget } from "./widget";
declare class _Picture extends BuderWidget {
    _type: string;
    _src?: string;
    constructor(src: string);
    render(): HTMLElement;
}
export declare function Picture(src: string): _Picture;
export {};
