import { BuderWidget } from './widget';

declare class _Canvas extends BuderWidget {
    context?: CanvasRenderingContext2D | null;
    width?: number;
    height?: number;
    _initFunc?: (ctx: CanvasRenderingContext2D | null) => void;
    constructor(width: number, height: number, init?: (ctx: CanvasRenderingContext2D | null) => void);
    render(): HTMLElement;
}
export declare const Canvas: (width: number, height: number, init?: (ctx: CanvasRenderingContext2D | null) => void) => _Canvas;
export {};
