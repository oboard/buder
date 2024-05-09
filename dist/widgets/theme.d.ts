import { BuderState, StateValue } from '../state';
import { BuderStyle } from '../styles';
import { BuderWidget } from './widget';

export type BuderClassType = string | string[] | BuderState<string[]>;
export declare function Theme(theme: StateValue<Record<string, BuderClassType | BuderStyle>>, widget: BuderWidget): BuderWidget;
