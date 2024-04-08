import { StateValue } from "../state";
import { BuderWidget } from "./widget";
export declare class _Text extends BuderWidget {
    _type: string;
    constructor(text: StateValue<string>);
    render(): HTMLElement;
    get center(): this;
}
export declare function Text(text: StateValue<string>): _Text;
