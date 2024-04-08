import { StateValue } from "../state";
import { BuderWidget } from "./widget";
export declare class _Text extends BuderWidget {
    _type: string;
    constructor(text: StateValue<any>);
    render(): HTMLElement;
    get center(): this;
}
export declare function Text(text: StateValue<any>): _Text;
