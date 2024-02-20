export declare enum BuderUnits {
    px = "px",
    em = "em",
    rem = "rem",
    vw = "vw",
    vh = "vh",
    percent = "%"
}
export interface BuderUnit {
    value: number;
    unit: BuderUnits;
}
export declare function px(num: number): BuderUnit;
export declare function em(num: number): BuderUnit;
export declare function rem(num: number): BuderUnit;
export declare function vw(num: number): BuderUnit;
export declare function vh(num: number): BuderUnit;
export declare function percent(num: number): BuderUnit;
