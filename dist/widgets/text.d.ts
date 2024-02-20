import { BuderWidget } from "./widget";
declare class _Text extends BuderWidget {
    constructor(text: string);
    render(): HTMLElement;
}
export declare function Text(text: string): _Text;
export {};
