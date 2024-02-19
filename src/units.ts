export enum BuderUnits {
  px = "px",
  em = "em",
  rem = "rem",
  vw = "vw",
  vh = "vh",
  percent = "%",
}

export interface BuderUnit {
  value: number;
  unit: BuderUnits;
}

export function px(num: number): BuderUnit {
  return { value: num, unit: BuderUnits.px };
}

export function em(num: number): BuderUnit {
  return { value: num, unit: BuderUnits.em };
}

export function rem(num: number): BuderUnit {
  return { value: num, unit: BuderUnits.rem };
}

export function vw(num: number): BuderUnit {
  return { value: num, unit: BuderUnits.vw };
}

export function vh(num: number): BuderUnit {
  return { value: num, unit: BuderUnits.vh };
}

export function percent(num: number): BuderUnit {
  return { value: num, unit: BuderUnits.percent };
}