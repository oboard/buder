import { BuderState } from "../state";
import { BuderWidget } from "./widget";
declare class _Text extends BuderWidget {
    constructor(text: string | BuderState<any>);
    render(): HTMLElement;
}
export declare function Text(text: string | BuderState<any>): _Text;
export {};
