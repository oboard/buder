import { StateValue } from "./state";
export declare enum BuderUnits {
    px = "px",
    em = "em",
    rem = "rem",
    vw = "vw",
    vh = "vh",
    percent = "%"
}
type BuderUnitType = StateValue<number> | StateValue<string>;
export interface BuderUnit {
    value: BuderUnitType;
    unit: BuderUnits;
}
export declare function px(num: BuderUnitType): BuderUnit;
export declare function em(num: BuderUnitType): BuderUnit;
export declare function rem(num: BuderUnitType): BuderUnit;
export declare function vw(num: BuderUnitType): BuderUnit;
export declare function vh(num: BuderUnitType): BuderUnit;
export declare function percent(num: BuderUnitType): BuderUnit;
export {};
