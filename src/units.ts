import { StateValue } from "./state";

export enum BuderUnits {
  px = "px",
  em = "em",
  rem = "rem",
  vw = "vw",
  vh = "vh",
  percent = "%",
}

type BuderUnitType = StateValue<number> | StateValue<string>;

export interface BuderUnit {
  value: BuderUnitType;
  unit: BuderUnits;
}

export function px(num: BuderUnitType): BuderUnit {
  return { value: num, unit: BuderUnits.px };
}

export function em(num: BuderUnitType): BuderUnit {
  return { value: num, unit: BuderUnits.em };
}

export function rem(num: BuderUnitType): BuderUnit {
  return { value: num, unit: BuderUnits.rem };
}

export function vw(num: BuderUnitType): BuderUnit {
  return { value: num, unit: BuderUnits.vw };
}

export function vh(num: BuderUnitType): BuderUnit {
  return { value: num, unit: BuderUnits.vh };
}

export function percent(num: BuderUnitType): BuderUnit {
  return { value: num, unit: BuderUnits.percent };
}
