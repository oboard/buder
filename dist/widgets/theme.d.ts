import { BuderState, StateValue } from "../state";
import { BuderWidget } from "./widget";
export type BuderClassType = string | string[] | BuderState<string[]>;
export declare function Theme(theme: StateValue<Record<string, BuderClassType>>, widget: BuderWidget): BuderWidget;
