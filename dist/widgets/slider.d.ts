import { BuderState } from '../state';
import { BuderWidget } from './widget';

export interface SliderOptions {
    min?: number;
    max?: number;
    step?: number;
}
export declare class _Slider extends BuderWidget {
    _options?: SliderOptions;
    _type: string;
    _tag: string;
    _model?: BuderState<number>;
    constructor(model?: BuderState<number>, options?: SliderOptions);
    render(): HTMLElement;
}
export declare const Slider: (value: BuderState<number>, options?: SliderOptions) => _Slider;
